/**
 * Sample input: an array of object [{name: "hello", uri: 1}, {name: "world", uri: 2}]
 * Output should be a single object {hello: 1, world: 2}
 */
export function generateMapFromUriData(data) {
  const result = {};
  data.forEach(item => {
    result[item.name] = item.uri;
  });
  return result;
}

/**
 * Sample input is:
 * {ES5: [{name: "hello", uri: 1}, {name: "world", uri: 2}],
 *  ES6: [{name: "hi", uri: 3}, {name: "there", uri: 4}]}
 * Output should be a single object {hello: 1, world: 2, hi: 3, there: 4}
 */
export function generateMapFromMapOfArray(mapOfArray) {
  let result = {};
  Object.keys(mapOfArray).forEach(key => {
    const currentMap = generateMapFromUriData(mapOfArray[key]);
    result = { ...result, ...currentMap };
  });
  return result;
}

export function setSelectedItem(uriArray, selectedName) {
  return uriArray.map(item => ({ ...item, selected: item.name === selectedName }));
}

export function isSelectedItemInArray(uriArray) {
  const filtered = uriArray.filter(item => item.selected);
  return filtered.length !== 0;
}
