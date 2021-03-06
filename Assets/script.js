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
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  let storeIt = JSON.parse(window.localStorage.getItem("storedToDo")) || [];
  storeIt.push({ time, value });
  window.localStorage.setItem("storedToDo", JSON.stringify(storeIt));
});
var saveToDo = JSON.parse(window.localStorage.getItem("storedToDo"));
$(".description").each(function () {
  let id = $(this).parent().attr("id");
  for (let i = 0; i < saveToDo.length; i++) {
    const element = saveToDo[i];
    if (id === element.time) {
      $(this).text(element.value);
    }
  }
});

colorHours();


// <!-- using a daily planner to create a schedule -->
// <!-- open the planner -->
// <!-- the current day is displayed at the top of the calendar -->
// <!-- scroll down -->
// <!-- presented with timeblocks for standard business hours -->
// <!-- view the timeblocks for that day -->
// <!-- each timeblock is color coded to indicate whether it is in the past, present, or future -->
// <!-- click into a timeblock -->
// <!-- can enter an event -->
// <!-- click the save button for that timeblock -->
// <!-- text for that event is saved in local storage -->
// <!-- refresh the page saved events persist -->
