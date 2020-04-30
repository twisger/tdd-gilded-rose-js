import Good from '../good';

test('should a good can init', () => {
  expect(new Good({ SellIn: 10, Quality: 10 })).toBeTruthy();
});
