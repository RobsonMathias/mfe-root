import replaceVersion from '../utils';

export const SimulationAdapter = (): Promise<any> => window.System.import(
  replaceVersion(
    window.client.getTreatment('mfe-simulation'),
    process.env.REACT_APP_SIMULATION
  )
);
