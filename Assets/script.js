// show current date and time on the top of the page using moment
let now = moment().format("dddd MMMM d, YYYY HHmm");
$("#currentDay").text(now);

// create variable for the current hour using moment and the targeting the each hour
let currentHour = moment().hours();

// accessing the part of each hour div that has the time block that text can be entered into and adding color to each of the time blocks based on css classes of past, present and future
function colorHours() {
  //
  $(".time-block").each(function () {
    let timeBlockHour = parseInt($(this).attr("id"));
    console.log($(this).attr("id"));
    if (currentHour > timeBlockHour) {
      $(this).addClass("past");
    } else if (currentHour === timeBlockHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
// when save button is clicked it turns on the function defined by variables of value, time and storeIt, to get the text that is in the text area called description, with the attribute of id. the save button and description are siblings.  storeIt will take what is saved in local storage under storedToDo and return it to the user or create and array that will be stored.
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val();
  // time is defined by accessing the id attribute of the parent of this, which is the div with id of 09, 10, etc. and the classes of row time-block
  let time = $(this).parent().attr("id");
  let storeIt = JSON.parse(window.localStorage.getItem("storedToDo")) || [];
  storeIt.push({ time, value });
  window.localStorage.setItem("storedToDo", JSON.stringify(storeIt));
});

// the variable of saveToDo is defined by rearranging the information in storedToDo, accessing it and returning it to an array
var saveToDo = JSON.parse(window.localStorage.getItem("storedToDo"));
// access the description class 
$(".description").each(function () {
  let id = $(this).parent().attr("id");
  for (let i = 0; i < saveToDo.length; i++) {
    const element = saveToDo[i];
    if (id === element.time) {
      $(this).text(element.value);
    }
  }
});
// call the colors for the past, present and future time blocks to show up in these areas
colorHours();



