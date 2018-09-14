import { generateMapFromUriData, setSelectedItem } from '../../util/processUriMap';

describe('uri data array util functions test', () => {
  const mockUriData = [
    { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift' },
    { name: 'Slice vs Splice', uri: 'arrayslicesplice' },
    { name: 'setTimeOut', uri: 'setTimeOut' },
  ];
  it('test generateMapFromUriData', () => {
    expect(generateMapFromUriData([])).toEqual({});
    expect(generateMapFromUriData(mockUriData)).toEqual({
      'Array basic APIs': 'arraypushpopshiftunshift',
      'Slice vs Splice': 'arrayslicesplice',
      setTimeOut: 'setTimeOut',
    });
  });

  it('test setSelectedItem', () => {
    expect(setSelectedItem([], 'setTimeOut')).toEqual([]);
    expect(setSelectedItem(mockUriData, 'setTimeOut')).toEqual([
      { name: 'Array basic APIs', uri: 'arraypushpopshiftunshift', selected: false },
      { name: 'Slice vs Splice', uri: 'arrayslicesplice', selected: false },
      { name: 'setTimeOut', uri: 'setTimeOut', selected: true },
    ]);
  });
});
