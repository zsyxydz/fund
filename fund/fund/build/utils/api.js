import server from '../config/server'

let debugMode = false

export default (source) => {
  const { path, type, version } = source;
  const params = source.params || {};

  // params.debug = debugMode;

  const queryStringArr = []
  Object.keys(params).forEach((key) => {
    if (params[key] === undefined) {
      return;
    }
    const queryString = `${key}=${encodeURIComponent(params[key])}`;
    queryStringArr.push(queryString);
  })

  const queries = queryStringArr.length > 0 ? '?' + queryStringArr.join('&') : '';

  let serverAddress;
  switch (type) {
    case 'strategy':
      serverAddress = server.strategyApiAddress;
      break;
    case 'user':
    default:
      serverAddress = server.userApiAddress;
      break;
  }

  const versionString = version ? `/api/v${version}` : '';

  const url = serverAddress + versionString + path + queries;
  console.log(url);
  return url;
}

export function setDebug(debug) {
  debugMode = debug;
}
