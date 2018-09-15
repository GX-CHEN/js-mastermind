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

export function isSelectedItemInArray(uriArray) {
  const filtered = uriArray.filter(item => item.selected);
  return filtered.length !== 0;
}
