class ClassicGuitar {
  constructor(manufactureYear, brand, price, stringsNum) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.stringsNum = stringsNum;
    this.used = false;
    this.#id;
  }

  #id = Math.floor((Date.now() - 1644840000000) / 100);

  play() {
    this.price *= 0.9;
    this.used = true;
    return "πΆπΆπΆ";
  }
  get guitarPrice() {
    return this.price;
  }
  get guitarYear() {
    return this.manufactureYear;
  }
  get guitarBrand() {
    return this.brand;
  }
  get guitarId() {
    return this.#id;
  }
  set changePrice(price) {
    this.price = price;
  }
  static detectSound(sound) {
    if (sound === "πΈ") {
      return "ElectricGuitar";
    }
    if (sound === "π") {
      return "BassGuitar";
    }
  }
}

class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, stringsNum, longNeck) {
    super(manufactureYear, brand, price, stringsNum);
    this.longNeck = longNeck;
  }
  play() {
    this.price *= 0.9;
    this.used = true;
    return "πΈπΈπΈ";
  }
}
class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, stringsNum) {
    super(manufactureYear, brand, price, stringsNum);
    this.stringsNum = 4;
  }
  play() {
    this.price *= 0.9;
    this.used = true;
    return "πππ";
  }
  playSolo() {
    return ["π₯", "π€", "π΅", "π’", "π’", "πΊ"]
      .sort(() => Math.random() - 0.5)
      .toString();
  }
}

module.exports = { ClassicGuitar, ElectricGuitar, BassGuitar };
