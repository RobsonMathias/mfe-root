import { registerApplication, start, getAppStatus } from 'single-spa';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window {
        System: any;
    }
}

Promise.all([
    window.System.import('@mfe/authentication')
]).then( modules => {
    console.log(modules);
});

const authenticationApp = (): Promise<any> => window.System.import('@mfe/authentication');
// const simulationApp = (): Promise<any> => window.System.import('@mfe/simulation');

registerApplication('@mfe/authentication', authenticationApp, () => true);
getAppStatus('@mfe/authentication');

start();
serviceWorker.unregister();
