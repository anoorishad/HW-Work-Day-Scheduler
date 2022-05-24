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
if (currentHour === 10 ) {
    $("#10").addClass("present");
}
else if (currentHour > 10) {
    $("#10").addClass("past");
}
else {
    $("#10").addClass("future");
}
console.log(currentHour);

// 11am
if (currentHour === 11 ) {
    $("#11").addClass("present");
}
else if (currentHour > 11) {
    $("#11").addClass("past");
}
else {
    $("#11").addClass("future");
}
console.log(currentHour);

// 12pm
if (currentHour === 12 ) {
    $("#12").addClass("present");
}
else if (currentHour > 12) {
    $("#12").addClass("past");
}
else {
    $("#12").addClass("future");
}
console.log(currentHour);

// 1pm
if (currentHour === 13 ) {
    $("#1").addClass("present");
}
else if (currentHour > 13) {
    $("#1").addClass("past");
}
else {
    $("#1").addClass("future");
}
console.log(currentHour);

// 2pm
if (currentHour === 14 ) {
    $("#2").addClass("present");
}
else if (currentHour > 14) {
    $("#2").addClass("past");
}
else {
    $("#2").addClass("future");
}
console.log(currentHour);

// 3pm
if (currentHour === 15 ) {
    $("#3").addClass("present");
}
else if (currentHour > 15) {
    $("#3").addClass("past");
}
else {
    $("#3").addClass("future");
}
console.log(currentHour);

// 4pm
if (currentHour === 16 ) {
    $("#4").addClass("present");
}
else if (currentHour > 16) {
    $("#4").addClass("past");
}
else {
    $("#4").addClass("future");
}
console.log(currentHour);

// 5pm
if (currentHour === 17 ) {
    $("#5").addClass("present");
}
else if (currentHour > 17) {
    $("#5").addClass("past");
}
else {
    $("#5").addClass("future");
}
console.log(currentHour);





// 9am Local Storage
$("#9btn").click(function(){
    let input9am = document.getElementById("9").value
    localStorage.setItem("9am", JSON.stringify(input9am))
})
let output9am = JSON.parse(localStorage.getItem("9am"));
document.getElementById("9").value = output9am


// 10am Local Storage
$("#10btn").click(function(){
    let input10am = document.getElementById("10").value
    localStorage.setItem("10am", JSON.stringify(input10am))
})
let output10am = JSON.parse(localStorage.getItem("10am"));
document.getElementById("10").value = output10am


// 11am Local Storage
$("#11btn").click(function(){
    let input11am = document.getElementById("11").value
    localStorage.setItem("11am", JSON.stringify(input11am))
})
let output11am = JSON.parse(localStorage.getItem("11am"));
document.getElementById("11").value = output11am


// 12pm Local Storage
$("#12btn").click(function(){
    let input12pm = document.getElementById("12").value
    localStorage.setItem("12pm", JSON.stringify(input12pm))
})
let output12pm = JSON.parse(localStorage.getItem("12pm"));
document.getElementById("12").value = output12pm


// 1pm Local Storage
$("#1btn").click(function(){
    let input1pm = document.getElementById("1").value
    localStorage.setItem("1pm", JSON.stringify(input1pm))
})
let output1pm = JSON.parse(localStorage.getItem("1pm"));
document.getElementById("1").value = output1pm


// 2pm Local Storage
$("#2btn").click(function(){
    let input2pm = document.getElementById("2").value
    localStorage.setItem("2pm", JSON.stringify(input2pm))
})
let output2pm = JSON.parse(localStorage.getItem("2pm"));
document.getElementById("2").value = output2pm


// 3pm Local Storage
$("#3btn").click(function(){
    let input3pm = document.getElementById("3").value
    localStorage.setItem("3pm", JSON.stringify(input3pm))
})
let output3pm = JSON.parse(localStorage.getItem("3pm"));
document.getElementById("3").value = output3pm


// 4pm Local Storage
$("#4btn").click(function(){
    let input4pm = document.getElementById("4").value
    localStorage.setItem("4pm", JSON.stringify(input4pm))
})
let output4pm = JSON.parse(localStorage.getItem("4pm"));
document.getElementById("4").value = output4pm


// 5pm Local Storage
$("#5btn").click(function(){
    let input5pm = document.getElementById("5").value
    localStorage.setItem("5pm", JSON.stringify(input5pm))
})
let output5pm = JSON.parse(localStorage.getItem("5pm"));
document.getElementById("5").value = output5pm