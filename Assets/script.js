// show current date and time on the top of the page using moment
let now = moment().format("dddd MMMM d, YYYY HHmm");
$("#currentDay").text(now);

// create variable for the current hour using moment and  targeting the each hour
let currentHour = moment().hours();

// accessing the part of each hour div that has the time block that text can be entered into and adding color to each of the time blocks based on css classes of past, present and future. continues to loop through each hour and update the background color based on its past, present or future status.
function colorHours() {
  //
  $(".time-block").each(function () {
    // parseInt will take the string of hours in the hourly time blocks and return the first number, here that is the specific hour in the planner
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
// when save button is clicked it turns on the function defined by variables of value, time and storeIt, to get the text that is in the text area called description, with the attribute of id. the save button and description are siblings.  storeIt will take what is saved in local storage under storedToDo and return it to the user or create an array that will be stored.
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val();
  // time is defined by accessing the id attribute of the parent of this, which is the div with id of 09, 10, etc. and the classes of row time-block
  let time = $(this).parent().attr("id");
  // takes string from storedToDo in local storage and makes it an object accessed by the variable of storeIt or access the empty array
  let storeIt = JSON.parse(window.localStorage.getItem("storedToDo")) || [];
  // variable of storeIt has time and value variables added to it at the end
  storeIt.push({ time, value });
  // accesses the local storage under storedToDo and turn the string of storeIt, time and value into object
  window.localStorage.setItem("storedToDo", JSON.stringify(storeIt));
});

// the variable of saveToDo is defined by rearranging the information in storedToDo, accessing it and returning it to an array
var saveToDo = JSON.parse(window.localStorage.getItem("storedToDo"));
// access the description class, continues to go through every hour's description area ... 
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



