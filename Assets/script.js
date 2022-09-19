var saveBtn = document.querySelectorAll(".saveBtn");
var currentHour = moment().hour();
var militaryHour = [8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(currentHour);
// places the current date in the jumbotron (header)
document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");

for (var i = 0; i < 9; i++) {
    // if current hour strictly matches the time block, mark time block with present color
    if (currentHour === militaryHour[i]) {
      console.log(i)
      document.getElementById(i).classList.add("present");
    }
// if  currentHour is greater than the time block, mark time block with past color
    if (currentHour > militaryHour[i]) {
        console.log(i);
        document.getElementById(i).classList.add("past");
      }
// if currentHour is less than the time block...
    if (currentHour < militaryHour[i]) {
        console.log(i);
        document.getElementById(i).classList.add("future");
    }
    // gets 
    if(localStorage.getItem(i)){
        document.getElementById(i).value = localStorage.getItem(i);
        console.log(localStorage)
    }
    // once user clicks the saveBtn..
    saveBtn[i].addEventListener("click", function(){
       // the "this" keyword calls the object associated in this function [i] 
      // and attaches it to the the attribute in the html, this is all delclared in the var as "id"
        var id = this.getAttribute("data-id");
        var text = document.getElementById(id).value;
    // the variable "text" returns value of (id) to the html through DOM manipulation
        localStorage.setItem(id,text);
        // info stored in local storage is set to (id) and (text)
        console.log(text);
    })

}