export function generateMapFromUriData(uriData) {
  const uriMap = {};
  uriData.forEach(item => {
    uriMap[item.name] = item.uri;
  });
  return uriMap;
}

export function getNamesFromUriData(uriData) {
  return uriData.map(item => item.name);
}
