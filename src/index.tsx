import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './serviceWorker';
import './index.css'

declare global {
    interface Window {
        System: any;
        splitio: any;
        client: any;
        Location: any;
    }
}

const replaceVersion = (treatment: string, appUrl: any) => {
    console.log(treatment, appUrl);
    if (treatment === 'master' || treatment === 'control') {
        return appUrl;
    } else {
        const version = treatment.replace(/_/g, '.');
        return appUrl.replace('://', `://${version}--`);
    }
};


window.client.on(window.client.Event.SDK_READY, () => {
    console.log(window.client.Event.SDK_READY);
    const authenticationApp = (): Promise<any> => window.System.import(
        replaceVersion(
            window.client.getTreatment('mfe-authentication'),
            process.env.REACT_APP_AUTHENTICATION
        )
    );
    const simulationApp = (): Promise<any> => window.System.import(
        replaceVersion(
            window.client.getTreatment('mfe-simulation'),
            process.env.REACT_APP_SIMULATION
        )
    );

    registerApplication('@mfe/authentication', authenticationApp, () => true);

    registerApplication('@mfe/simulation', simulationApp,
        () => window.location.pathname.indexOf('/simulation') === 0);

}, () => console.error('MUST FIX!'));

start();
serviceWorker.unregister();

// https://buzz-sandbox.creditoo.com.br/api/
