export const replaceVersion = (treatment: string, appUrl: any) => {
  if (treatment === 'master' || treatment === 'control' || appUrl.indexOf('localhost') > -1) {
    return appUrl;
  } else {
    return `/${treatment}/${appUrl}`;
  }
};
