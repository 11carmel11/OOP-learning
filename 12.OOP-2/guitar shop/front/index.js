const selectionArea = document.getElementById("selection");
let guitarType;
let guitar;

const manYearElm = createElement("input", [], [], {
  id: "manYear",
  placeholder: "manufacturing year",
});
const brandElm = createElement("input", [], [], {
  id: "brand",
  placeholder: "brand",
});
const priceElm = createElement("input", [], [], {
  id: "price",
  placeholder: "price",
});
const stringNumElm = createElement("input", [], [], {
  id: "stringNum",
  placeholder: "strings number",
});
const longNeckElm = createElement("input", [], [], {
  id: "longNeck",
  type: "checkbox",
});
const checkLongNeckElm = createElement(
  "label",
  [],
  [],
  { for: "longNeck" },
  "long neck (yes/no):"
);
const submitButtonElm = createElement("input", [], ["btn", ".btn-info"], {
  id: "submitButton",
  onclick: "submit()",
  value: "click to see your guitar",
  type: "button",
});
const longNeckContainer = createElement(
  "span",
  [checkLongNeckElm, longNeckElm],
  ["container"]
);
function createElement(
  tagName,
  children = [],
  classes = [],
  attributes = {},
  text = null
) {
  const element = document.createElement(tagName);
  for (let child of children) {
    element.append(child);
  }
  for (let name of classes) {
    element.classList.add(name);
  }
  for (let attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }
  if (text !== null) {
    element.innerText = text;
  }
  return element;
}
const postChoice = (event) => {
  if (event.target.localName !== "input") return;
  guitarType = event.target.value;
  selectionArea.innerHTML = "now enter properties: <br>";
  selectionArea.append(manYearElm, brandElm, priceElm);
  if (guitarType !== "BassGuitar") {
    selectionArea.append(stringNumElm);
  }
  if (guitarType === "ElectricGuitar") {
    selectionArea.append(longNeckContainer);
  }
  selectionArea.append(submitButtonElm);
  selectionArea.removeEventListener("click", postChoice);
};
const playGuitar = () => {
  document.getElementById(
    "priceArea"
  ).innerHTML = `Guitar's worth was ${guitar.price}$, `;
  alert(guitar.play());
  document.getElementById(
    "priceArea"
  ).innerHTML += `but now it's ${guitar.price}$`;
};

const playGuitarSolo = () => {
  alert(guitar.playSolo());
};

const submit = () => {
  for (let child of selectionArea.children) {
    if (!child.value && child.localName === "input") return;
  }
  axios.get(`http://localhost:8080/${guitarType}`).then((data) => {
    eval(data.data);
    const ClassicGuitar = generic();
    guitarType = suitCase();
    guitar = new guitarType(
      parseFloat(manYearElm.value),
      brandElm.value,
      parseFloat(priceElm.value),
      parseFloat(stringNumElm.value),
      longNeckElm.checked
    );
    selectionArea.classList.replace("alert-info", "alert-success");
    selectionArea.innerHTML = `<span id="priceArea">Guitar's worth is ${guitar.guitarPrice}$</span>, from the house of ${guitar.guitarBrand}'s, made with ${guitar.stringsNum} strings at the old ${guitar.guitarYear}'s, good for you! Your guitar's ID is ${guitar.guitarId}`;
    document.body.append(
      createElement("input", [], [], {
        id: "play",
        type: "button",
        value: "play it!",
        onclick: `playGuitar()`,
      })
    );
    if (guitar.playSolo) {
      document.body.append(
        createElement("input", [], [], {
          id: "play solo",
          type: "button",
          value: "play solo!",
          onclick: `playGuitarSolo()`,
        })
      );
    }
  });
};

selectionArea.addEventListener("click", postChoice);
