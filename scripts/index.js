"use strict"

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

// created arrays to separate attributes of objects in teams array
let codes = [];
let names = [];
let locations = [];

// used for-of loop to push each attribute to the arrays created above
for (let value of teams) {
    codes.push(value.code)
    names.push(value.name)
    locations.push(value.plays)
}

const teamsList = document.getElementById("teamsList");

let length = teams.length;

window.onload = function () {
    initTeamsDropdown();
    const Btn = document.getElementById("Btn");
    Btn.onclick = displayInfo;
}

function initTeamsDropdown() {

    for (let i = 0; i < length; i++) {

        // create the option element
        let theOption = document.createElement("option");

        // set the text and value of the option you created        
        theOption.textContent = names[i];
        theOption.value = codes[i];

        // let theOption = new Option(names[i], codes[i]); // this step is the same as the previous three
                                                           // lines of code, it just creates option element
                                                           // and  sets the text and value at one time

        // append the option as a child of (inside) the
        // select element   
        teamsList.appendChild(theOption);
    }
}

function displayInfo () {
    let selectedValue = teamsList.value;
    for (let i = 0; i < length; i++) {
        if (selectedValue == codes[i]) {
            document.getElementById("teamInfo").innerHTML = "You selected the " + names[i] + " (" + codes[i] + ") who play in " + locations[i];
        }
    }
    return false;
}