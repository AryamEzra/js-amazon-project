import formatCurrency from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('should format 1234 as 12.34', () => {
    expect(formatCurrency(1234)).toEqual('12.34');
  });

  it('should format 0 as 0.00', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('should format 2000.5 as 20.01', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('should format 2000.4 as 20.00', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});