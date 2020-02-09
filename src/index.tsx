import { registerApplication, start, getAppStatus } from 'single-spa';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window {
        System: any;
    }
}


const legacyApp = (): Promise<any> => window.System.import('@creditas/legacy');
//
// registerApplication('legacy', legacyApp, () => true);
// getAppStatus('legacy');

start();
serviceWorker.unregister();
