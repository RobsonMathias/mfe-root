import replaceVersion from '../utils';

const SimulationLib = (): Promise<any> => window.System.import(
  replaceVersion(
    window.client.getTreatment('mfe-simulation'),
    process.env.REACT_APP_AUTHENTICATION
  )
);

export default SimulationLib;
