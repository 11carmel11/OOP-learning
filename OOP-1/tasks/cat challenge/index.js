const cat = {
  tiredness: 10,
  hunger: 10,
  loneliness: 10,
  happiness: 0,
  play() {
    this.tiredness -= 2;
    this.hunger += 2;
    this.happiness += 2;
    this.loneliness -= 3;
    return this;
  },
  pet() {
    this.tiredness += 1;
    this.happiness += 2;
    this.loneliness -= 3;
    this.hunger -= 1;
    return this;
  },
  feed() {
    this.tiredness += 2;
    this.hunger = 2;
    this.happiness += 2;
    this.loneliness -= 1;
    return this;
  },
  sleep() {
    this.tiredness -= 6;
    this.hunger += 4;
    this.happiness += 1;
    this.loneliness += 2;
    return this;
  },
  checkStats() {
    let tiredness = this.tiredness;
    let hunger = this.hunger;
    let happiness = this.happiness;
    let loneliness = this.loneliness;
    console.log({ tiredness, hunger, happiness, loneliness });
  },
};
setInterval(() => {
  if (cat.tiredness > 10) {
    alert("cat is tired");
    cat.tiredness = 10;
  }
  if (cat.hunger > 10) {
    alert("cat is hungry");
    cat.hunger = 10;
  }
  if (cat.happiness < 0) {
    alert("cat is sad");
    cat.happiness = 0;
  }
  if (cat.loneliness > 10) {
    alert("cat is lonely");
    cat.loneliness = 10;
  }
}, 1000);
