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

const authenticationApp = (): Promise<any> => window.System.import('@mfe/authentication');
const simulationApp = (): Promise<any> => window.System.import('@mfe/simulation');
const simulationV1BetaApp = (): Promise<any> => window.System.import('@mfe/simulation/v0.0.1-beta');

window.client.on(window.client.Event.SDK_READY, () => {
    registerApplication('@mfe/authentication', authenticationApp, () => true);

    registerApplication('@mfe/simulation', simulationApp, () =>
        window.client.getTreatment('mfe-simulation') === 'default' && window.location.pathname.indexOf('/simulation') === 0);

    registerApplication('@mfe/simulation/v0.0.1-beta', simulationV1BetaApp, () => {
        return window.client.getTreatment('mfe-simulation') === 'v0_0_1-beta' &&
            window.location.pathname.indexOf('/simulation') === 0;
    });
}, () => console.error('MUST FIX!'));

start();
serviceWorker.unregister();
