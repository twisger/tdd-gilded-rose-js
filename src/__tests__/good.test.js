import Good, { AgedBrie, Sulfuras, BackstagePass } from '../good';

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

test('should Sulfuras price not change', () => {
  const sulfuras = new Sulfuras({ SellIn: 0, Quality: 10 });
  expect(sulfuras.getPrice(10)).toBe(10);
  expect(sulfuras.getPrice(20)).toBe(10);
});

describe('Backstage pass', () => {
  const showDay = 20;
  test('should price increase 1 before show day', () => {
    const good = new BackstagePass({ SellIn: 10, Quality: 10 });
    expect(good.getPrice(5, showDay)).toBe(15);
  });
  test('should price increase 2 before show day 10', () => {
    const good = new BackstagePass({ SellIn: 10, Quality: 10 });
    expect(good.getPrice(12, showDay)).toBe(24);
  });
  test('should price increase 3 before show day 5', () => {
    const good = new BackstagePass({ SellIn: 10, Quality: 10 });
    expect(good.getPrice(17, showDay)).toBe(36);
  });
  test('should price be 0 after show day', () => {
    const good = new BackstagePass({ SellIn: 10, Quality: 10 });
    expect(good.getPrice(21, showDay)).toBe(0);
  });
});
