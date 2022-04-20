let currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

let currentHour = Number(currentDay.format("H"));

setInterval(function(){
    currentDay= moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

},1000)

// 9am
if (currentHour === 19 ) {
    $("#9").addClass("present");
}
else if (currentHour > 19) {
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