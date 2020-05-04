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
    if (price < 0) {
      return 0;
    }
    if (price > 50) {
      return 50;
    }
    return price;
  }
}
