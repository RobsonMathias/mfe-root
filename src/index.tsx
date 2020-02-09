import './polyfills';
import { registerApplication, start, getAppStatus } from 'single-spa';
import * as serviceWorker from './serviceWorker';

const legacyApp = (): Promise<any> => window.System.import('@creditas/legacy');
//
// registerApplication('legacy', legacyApp, () => true);
// getAppStatus('legacy');

start();
serviceWorker.unregister();
