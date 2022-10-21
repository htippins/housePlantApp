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
    daysBetweenSummer: 7,
    daysBetweenWinter: 30,
    light: "Bright, indirect",
    water: "Low and misting",
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
  console.log(plantName);
  //Get the inputted last watered date and convert it to a readable string
  const date = lastWateredDate();
  console.log(date.toDateString());
  //Get the amount of days per plant and calculate when the next watering date is
  const daysTillWater = plants[n].daysBetweenSummer;
  const daysTillWaterDate = addDays(daysTillWater).toDateString();
  //Display the date on the webpage
  const nextWater = document.querySelector("#nextDue");
  nextWater.textContent = daysTillWaterDate;
});
