import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './serviceWorker';
import './index.css'
import {AuthenticationAdapter, SimulationAdapter} from './adapters';
import {HttpRequestFacadeService} from './facade-service';

declare global {
    interface Window {
        System: any;
        splitio: any;
        newrelic: any;
        client: any;
        Location: any;
    }
}

const simulationInit = window.newrelic.interaction().createTracer('simulation-init_setup', () => {
    registerApplication('@mfe/simulation', SimulationAdapter,
        () => window.location.pathname.indexOf('/simulation') === 0);
});

const authenticationInit = window.newrelic.interaction().createTracer('authentication-init_setup', () => {
    registerApplication('@mfe/authentication', AuthenticationAdapter, () => true, {
        httpRequest: new HttpRequestFacadeService()
    });
});

window.client.on(window.client.Event.SDK_READY, () => {
    authenticationInit();
    simulationInit();
});

start();
serviceWorker.unregister();
