// https://www.omnicalculator.com/everyday-life/fuel-mileage

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fuelmileageRadio = document.getElementById('fuelmileageRadio');
const distancetraveledRadio = document.getElementById('distancetraveledRadio');
const fuelusedRadio = document.getElementById('fuelusedRadio');

let fuelmileage;
let distancetraveled = v1;
let fuelused = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fuelmileageRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance traveled';
  variable2.textContent = 'Fuel used';
  distancetraveled = v1;
  fuelused = v2;
  result.textContent = '';
});

distancetraveledRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel mileage';
  variable2.textContent = 'Fuel used';
  fuelmileage = v1;
  fuelused = v2;
  result.textContent = '';
});

fuelusedRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel mileage';
  variable2.textContent = 'Distance traveled';
  fuelmileage = v1;
  distancetraveled = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fuelmileageRadio.checked)
    result.textContent = `Fuel mileage = ${computefuelmileageRadio().toFixed(2)}`;

  else if(distancetraveledRadio.checked)
    result.textContent = `Distance traveled = ${computedistancetraveled().toFixed(2)}`;

  else if(fuelusedRadio.checked)
    result.textContent = `Fuel used = ${computefuelused().toFixed(2)}`;
})

// calculation

function computefuelmileageRadio() {
  return Number(distancetraveled.value) / Number(fuelused.value);
}

function computedistancetraveled() {
  return Number(fuelmileage.value) * Number(fuelused.value);
}

function computefuelused() {
  return Number(distancetraveled.value) / Number(fuelmileage.value);
}