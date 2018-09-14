export function generateMapFromUriData(uriData) {
  const uriMap = {};
  uriData.forEach(item => {
    uriMap[item.name] = item.uri;
  });
  return uriMap;
}

export function setSelectedItem(uriData, selectedName) {
  return uriData.map(item => ({ ...item, selected: item.name === selectedName }));
}
