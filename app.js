"use strict";

//Array containing the plant objects
let plants = [
  {
    name: "Swiss Cheese Plant",
    daysBetweenSummer: 7,
    daysBetweenWinter: 7,
    light: "Bright, indirect",
    water: "Moderate and misting",
    soil: "Well-draining",
  },
  {
    name: "Bird of Paradise",
    daysBetweenSummer: 7,
    daysBetweenWinter: 7,
    light: "Bright, indirect",
    water: "Moderate",
    soil: "Well-draining",
  },
  {
    name: "Devil's Ivy",
    daysBetweenSummer: 7,
    daysBetweenWinter: 30,
    light: "Bright, indirect",
    water: "Moderate",
    soil: "Well-draining",
  },
  {
    name: "Wax Plant",
    daysBetweenSummer: 14,
    daysBetweenWinter: 28,
    light: "Bright, indirect",
    water: "Low and misting",
    soil: "Well-draining",
  },
  {
    name: "Mini Monstera",
    daysBetweenSummer: 4,
    daysBetweenWinter: 8,
    light: "Bright, indirect",
    water: "Moderate",
    soil: "Well-draining",
  },
  {
    name: "Begonia",
    daysBetweenSummer: 2,
    daysBetweenWinter: 4,
    light: "Bright, indirect",
    water: "Low moderate",
    soil: "Well-draining",
  },
  {
    name: "Peacock Plant",
    daysBetweenSummer: 2,
    daysBetweenWinter: 4,
    light: "Bright, indirect",
    water: "Moderate-high + misting",
    soil: "Well-draining",
  },
  {
    name: "Variegated Rubber Plant",
    daysBetweenSummer: 5,
    daysBetweenWinter: 12,
    light: "Bright, indirect",
    water: "Moderate",
    soil: "Well-draining",
  },
];

//Dynamically populates the drop down menu with the plants
let arrLength = plants.length;
for (let i = 0; i < arrLength; i++) {
  const dropDown = document.querySelector("#plants");
  const option = document.createElement("option");
  option.id = i;
  option.text = plants[i].name;
  dropDown.add(option);
}

function plantImage(plantID) {
  //Create an image element
  let img = document.createElement("IMG");
  img.src = `../images/plant${plantID}.jpg`;
  document.querySelector('.second-item').appendChild(img);
}

//Returns the inputted date
function lastWateredDate() {
  const date = document.querySelector("#lastWatered").value;
  const dateObject = new Date(date);
  return dateObject;
}

//Gets the date last watered and adds the number of days between watering, returns the next date to water the plant
function addDays(days) {
  const result = lastWateredDate();
  result.setDate(result.getDate() + days);
  return result;
}

//Get days between next watering
function getDaysBetween() {
  const plant = getPlant();
}

//Performs the actions when the submit button is clicked
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  //Drop down returns the plants position in the array
  const plantID = document.querySelector("#plants").selectedIndex;
  const n = plantID;
  const plantName = plants[n].name;
  //Get the inputted last watered date and convert it to a readable string
  const date = lastWateredDate();
  //Get the amount of days per plant and calculate when the next watering date is
  const daysTillWater = plants[n].daysBetweenSummer;
  const daysTillWaterDate = addDays(daysTillWater).toDateString();
  //Display the date on the webpage
  const nextWater = document.querySelector("#nextDue");
  nextWater.textContent = daysTillWaterDate;
  plantImage(n);
});

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener("click", function() {
  const clearImage = document.querySelector('img');
  clearImage.remove();
});