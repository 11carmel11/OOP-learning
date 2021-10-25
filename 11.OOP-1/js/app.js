// by refrance

// let fName = "Eli";

// let fName2 = fName;

// fName2 = "Rina";

// console.log(fName);

// let numArr = [1,2,3,4];

// let numArr2 = numArr;

// numArr[1] = 20;

// console.log(numArr2[1]);

let elem = document.getElementById("root");

let citys = {
  cName: "Jerusalem",
  population: 1000000,
  color: "Orange",
};

console.log(citys.color);

// function returning obj

// let objBuilder = (newCname, popul, cColor) => {
//   let city = {};

//   city.cName = newCname;
//   city.population = popul;
//   city.color = cColor;

//   city.callCity = function () {
//     elem.innerHTML = city.cName;
//   };

//   city.clearCity = function () {
//     elem.innerHTML = "";
//   };
//   return city;
// };

// let myCity = objBuilder("Ramt-gan", 200000, "Red");
// let myOtherCity = objBuilder("Haifa", 1500000, "Green");

let myNums = [1, 2, 3, 45];
// // examp for playing with prototype ( __proto__)
// Array.prototype.pop = function () {
//   console.log("no no nono I love that val and will not pop it/");
// };

// String.prototype.declar = function () {
//   console.log(`I am ${this}`);
// };

// factory funciton exp:
// function Cars(make, year, carColor) {
//   this.make = make;
//   this.year = year;
//   this.color = carColor;
// }

// Cars.prototype.carName = function () {
//   elem.innerHTML = this.make;
//   return this.make;
// };

// Cars.prototype.nameClear = function () {
//   elem.innerHTML = "";
// };

// let myCar = new Cars("BMW", 2020, "silver");
// let myOldCar = new Cars("Ford", 1999, "blue");

// class MyCars {
//   constructor(make, _year, _color) {
//     this.make = make;
//     this.year = _year;
//     this.color = _color;
//   }

//   changeName(name) {
//     elem.innerHTML = name;
//     elem.innerHTML += this.make;
//   }

//   clearName() {
//     elem.innerHTML = "";
//   }
// }

// let newCar = new MyCars("Shavrolt", 2019, "silver");
// let newCarAgin = new MyCars("Shavrolt", 2019, "silver");
// let oldCar = new MyCars("Ford", 2009, "blue");

// comp that brings data
console.log(vip_arr);
let data = vip_arr;

// comp class - buliding the logic

class MakeVip {
  constructor(_name, _worth, _img) {
    this.name = _name;
    this.worth = _worth;
    this.img = _img;
  }
  render() {
    elem.innerHTML += `
    <div id="vipName">Your name is : ${this.name}</div>
        <div id="vipWorth">You are worth : ${this.worth}</div>
        <img src=${this.img} alt=${this.name}>
    
    `;
  }
}

// manager - oprating the class.

data.forEach((person) => {
  let instanse = new MakeVip(person.name, person.worth, person.image);
  instanse.render();
});
