import { registerApplication, start, getAppStatus } from 'single-spa';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window {
        System: any;
    }
}

const authorizationApp = (): Promise<any> => window.System.import('@mfe/authorization');
const simulationApp = (): Promise<any> => window.System.import('@mfe/simulation');

registerApplication('@mfe/authorization', authorizationApp, () => true);
registerApplication('@mfe/simulation', simulationApp, () => true);

start();
serviceWorker.unregister();
