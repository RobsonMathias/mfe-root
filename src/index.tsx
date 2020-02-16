import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './serviceWorker';
import './index.css'
import AuthenticationLib from './libs';
import SimulationLib from './libs/simulation.lib';
import replaceVersion from './utils';

declare global {
    interface Window {
        System: any;
        splitio: any;
        client: any;
        Location: any;
    }
}

window.client.on(window.client.Event.SDK_READY, () => {
    registerApplication('@mfe/authentication', AuthenticationLib, () => true);
    registerApplication('@mfe/simulation', SimulationLib,
        () => window.location.pathname.indexOf('/simulation') === 0);
});

start();
serviceWorker.unregister();
