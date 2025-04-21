let inputUnit = 0;
let metersToFeet = 0;
let litersToGallons = 0;
let kilogramsToPounds = 0;
let feetToMeters = 0;
let gallonsToLiters = 0;
let poundsToKilograms = 0;

const inputUnitEl = document.getElementById("input-unit");
const lengthResultEl = document.getElementById("length-result");
const volumeResultsEl = document.getElementById("volume-result");
const massResultsEl = document.getElementById("mass-result");
const convertBtnEl = document.getElementById("convert-btn");
inputUnitEl.addEventListener("input", updateUnits);

function renderValues() {
  inputUnitEl.value = inputUnit;
  lengthResultEl.innerHTML = `${inputUnit} meters = ${metersToFeet} feet | ${inputUnit} feet = ${feetToMeters} meters`;
  volumeResultsEl.innerHTML = `${inputUnit} liters = ${litersToGallons} gallons | ${inputUnit} gallons = ${gallonsToLiters} liters`;
  massResultsEl.innerHTML = `${inputUnit} kilograms = ${kilogramsToPounds} pounds | ${inputUnit} pounds = ${poundsToKilograms} kilograms`;
  disableConvert();
}
renderValues();

const resetEl = document.getElementById("reset");

disableReset(true);

function setPasswordBtnDisabled(change) {
  passwordOneEl.disabled = change;
  passwordTwoEl.disabled = change;
}

function reset() {
  inputUnit = 0;
  metersToFeet = 0;
  litersToGallons = 0;
  kilogramsToPounds = 0;
  feetToMeters = 0;
  gallonsToLiters = 0;
  poundsToKilograms = 0;
  disableReset(true);
  disableConvert();
  renderValues();
}

function updateUnits() {
  inputUnit = parseFloat(inputUnitEl.value);
  console.log("inputUnit", inputUnit);
  disableConvert();
}

function convertUnits() {
  inputUnit = parseFloat(inputUnitEl.value);
  console.log("inputValue", inputUnit);
  if (isNaN(inputUnit)) {
    alert("Please enter a valid number");
    return;
  }

  metersToFeet = (inputUnit * 3.280839895).toFixed(3);
  console.log("metersToFeet", inputUnit * 3.280839895);
  feetToMeters = (inputUnit / 3.280839895).toFixed(3);
  console.log("feetToMeters", inputUnit / 3.281);
  litersToGallons = (inputUnit * 0.2199692483).toFixed(3);
  console.log("litersToGallons", inputUnit * 0.264);
  gallonsToLiters = (inputUnit / 0.2199692483).toFixed(3);
  console.log("gallonsToLiters", inputUnit / 0.264);
  kilogramsToPounds = (inputUnit / 0.45359237).toFixed(3);
  console.log("kilogramsToPounds", inputUnit / 0.45359237);
  poundsToKilograms = (inputUnit * 0.45359237).toFixed(3);
  console.log("poundsToKilograms", inputUnit * 0.45359237);

  renderValues();
  disableReset(false);
  disableConvert();
}

function disableReset(change) {
  resetEl.disabled = change;
}

function disableConvert() {
  console.log("inputUnit", inputUnit);
  if (
    isNaN(inputUnit) ||
    inputUnit === "" ||
    inputUnit <= 0 ||
    inputUnit === undefined
  ) {
    change = true;
  } else {
    change = false;
  }
  convertBtnEl.disabled = change;
}
