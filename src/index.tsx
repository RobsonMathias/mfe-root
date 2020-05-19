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

window.client.on(window.client.Event.SDK_READY, () => {
    window.newrelic.interaction().createTracer('@mfe/authentication', function myCallback () {
        registerApplication('@mfe/authentication', AuthenticationAdapter, () => true, {
            httpRequest: new HttpRequestFacadeService()
        });
    })();
    window.newrelic.interaction().createTracer('@mfe/simulation', function myCallback () {
        registerApplication('@mfe/simulation', SimulationAdapter,
            () => window.location.pathname.indexOf('/simulation') === 0);
    })();
});

start();
serviceWorker.unregister();
