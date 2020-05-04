import Good, { AgedBrie } from '../good';

test('should a good can init', () => {
  expect(new Good({ SellIn: 10, Quality: 10 })).toBeTruthy();
});

test('should good price change when day change', () => {
  const good = new Good({ SellIn: 10, Quality: 10 });
  expect(good.getPrice(1)).not.toEqual(good.getPrice(2));
});

test('should good price small than 0 and larger than 100', () => {
  const good = new Good({ SellIn: 10, Quality: 10 });
  const result = [0, 1, 10, 15].map(day => good.getPrice(day));
  result.forEach((price) => {
    expect(price).toBeLessThanOrEqual(50);
    expect(price).toBeGreaterThanOrEqual(0);
  });
});

test('should decrease in double after SellIn', () => {
  const good = new Good({ SellIn: 5, Quality: 20 });
  expect(good.getPrice(3)).toBe(17);
  expect(good.getPrice(8)).toBe(9);
});

test('should Aged Brie increase 1 every day', () => {
  const agedBrie = new AgedBrie({ SellIn: 10, Quality: 10 });
  expect(agedBrie.getPrice(5)).toBe(15);
  expect(agedBrie.getPrice(50)).toBe(50);
});
