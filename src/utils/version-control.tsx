const replaceVersion = (treatment: string, appUrl: any) => {
  if (treatment === 'master' || treatment === 'control') {
    return appUrl;
  } else {
    const version = treatment.replace(/_/g, '.');
    return appUrl.replace('://', `://${version}--`);
  }
};

export default replaceVersion;
