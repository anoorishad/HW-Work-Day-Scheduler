let currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

let currentHour = Number(currentDay.format("H"));

setInterval(function(){
    currentDay= moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

},1000)

// 9am
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 10am
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 11am
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 12pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 1pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 2pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 3pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 4pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);
// 5pm
if (currentHour === 9 ) {
    $("#9").addClass("present");
}
else if (currentHour > 9) {
    $("#9").addClass("past");
}
else {
    $("#9").addClass("future");
}
console.log(currentHour);





// 9am Local Storage
$("#9btn").click(function(){
    let input9am = document.getElementById("9").value
    localStorage.setItem("9am", JSON.stringify(input9am))
})
let output9am = JSON.parse(localStorage.getItem("9am"));
document.getElementById("9").value = output9am