import { generateMapFromUriData, getNamesFromUriData } from '../../util/processUriMap';

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

  it('test getNamesFromUriData', () => {
    expect(getNamesFromUriData([])).toEqual([]);
    expect(getNamesFromUriData(mockUriData)).toEqual(['Array basic APIs', 'Slice vs Splice', 'setTimeOut']);
  });
});
