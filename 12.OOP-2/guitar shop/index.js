class ClassicGuitar {
  constructor(manufactureYear, brand, price, stringsNum) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.stringsNum = stringsNum;
    this.used = false;
    this.#id;
  }

  #id = Date.now();

  play() {
    this.price *= 0.9;
    this.used = true;
    return "🎶🎶🎶";
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
    if (sound === "🎸") {
      return "ElectricGuitar";
    }
    if (sound === "🔊") {
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
    return "🎸🎸🎸";
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
    return "🔊🔊🔊";
  }
  playSolo() {
    return ["💥", "🤘", "🎵", "📢", "💢", "🕺"]
      .sort(() => Math.random() - 0.5)
      .toString();
  }
}
