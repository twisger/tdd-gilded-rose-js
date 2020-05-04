export default class Good {
  constructor({ SellIn, Quality }) {
    this.SellIn = SellIn;
    this.Quality = Quality;
  }

  getPrice(day) {
    let price;
    if (day <= this.SellIn) {
      price = this.Quality - day;
    } else {
      price = this.Quality - (day - this.SellIn) * 2 - this.SellIn;
    }
    return this.getFinalPrice(price);
  }

  getFinalPrice(price) {
    if (price < 0) {
      return 0;
    }
    if (price > 50) {
      return 50;
    }
    return price;
  }
}

export class AgedBrie extends Good {
  getPrice(day) {
    return super.getFinalPrice(this.Quality + day);
  }
}

export class Sulfuras extends Good {
  getPrice() {
    return super.getFinalPrice(this.Quality);
  }
}

export class BackstagePass extends Good {
  getPrice(day, showDay) {
    if (day <= showDay) {
      const onePointDay = day <= (showDay - 10) ? day : showDay - 10;

      let twoPointDay = 0;
      if (day > showDay - 10 && day <= showDay - 5) {
        twoPointDay = day - (showDay - 10);
      }
      if (day > showDay - 5) {
        twoPointDay = 5;
      }

      const threePointDay = day > (showDay - 5) ? (day - (showDay - 5)) : 0;
      return super.getFinalPrice(this.Quality + onePointDay + twoPointDay * 2 + threePointDay * 3);
    }
    if (day > showDay) {
      return super.getFinalPrice(0);
    }
  }
}
