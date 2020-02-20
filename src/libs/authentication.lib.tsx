import replaceVersion from '../utils';


const AuthenticationLib = (): Promise<any> => window.System.import(
  replaceVersion(
    window.client.getTreatment('mfe-authentication'),
    process.env.REACT_APP_AUTHENTICATION
  )
);

export default AuthenticationLib;
