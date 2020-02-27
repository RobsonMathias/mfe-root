import replaceVersion from '../utils';


export const AuthenticationAdapter = (): Promise<any> => window.System.import(
  replaceVersion(
    window.client.getTreatment('mfe-authentication'),
    process.env.REACT_APP_AUTHENTICATION
  )
);
