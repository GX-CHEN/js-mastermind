import {
  generateMapFromUriData,
  setSelectedItem,
  isSelectedItemInArray,
  generateMapFromMapOfArray,
} from '../../util/processUriMap';

describe('uri data array util functions test', () => {
  const mockUriData = [
    { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift' },
    { name: 'Slice vs Splice', uri: 'arrayslicesplice' },
    { name: 'setTimeOut', uri: 'setTimeOut' },
  ];
  it('test generateMapFromUriData()', () => {
    expect(generateMapFromUriData([])).toEqual({});
    expect(generateMapFromUriData(mockUriData)).toEqual({
      'Array basic APIs': 'arraypushpopshiftunshift',
      'Slice vs Splice': 'arrayslicesplice',
      setTimeOut: 'setTimeOut',
    });
  });

  it('test setSelectedItem()', () => {
    expect(setSelectedItem([], 'setTimeOut')).toEqual([]);
    expect(setSelectedItem(mockUriData, 'setTimeOut')).toEqual([
      { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift', selected: false },
      { name: 'Slice vs Splice', uri: 'arrayslicesplice', selected: false },
      { name: 'setTimeOut', uri: 'setTimeOut', selected: true },
    ]);
  });

  it('isSelectedItemInArray()', () => {
    expect(isSelectedItemInArray([])).toEqual(false);
    expect(
      isSelectedItemInArray([
        { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift', selected: false },
        { name: 'setTimeOut', uri: 'setTimeOut', selected: false },
      ]),
    ).toEqual(false);
    expect(
      isSelectedItemInArray([
        { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift', selected: false },
        { name: 'setTimeOut', uri: 'setTimeOut', selected: true },
      ]),
    ).toEqual(true);
  });

  it('generateMapFromMapOfArray()', () => {
    expect(generateMapFromMapOfArray([])).toEqual({});
    expect(
      generateMapFromMapOfArray({
        ES5: [
          { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift', selected: false },
          { name: 'setTimeOut', uri: 'setTimeOut', selected: false },
        ],
        ES6: [{ name: 'name1', uri: 'testUri1', selected: false }, { name: 'name2', uri: 'testUri2', selected: false }],
      }),
    ).toEqual({
      'Array basic APIs': 'arraypushpopshiftunshift',
      setTimeOut: 'setTimeOut',
      name1: 'testUri1',
      name2: 'testUri2',
    });
  });
});
