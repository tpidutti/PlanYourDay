// show current date and time on the top of the page
const now = moment().format("dddd MMMM d, YYYY HHmm");
$("#currentDay").text(now);

let currentHour = moment().hours()

function colorHours(){
    $(".time-block").each(function(){
        let timeBlockHour = parseInt($(this).attr("id"))
        console.log($(this).attr("id"))
        if (currentHour > timeBlockHour){
            $(this).addClass("past")
        }else if(currentHour === timeBlockHour){
            $(this).addClass("present")
        } else{
            $(this).addClass("future")
        }
    });

} 
$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    let storeIt = JSON.parse(window.localStorage.getItem("storedToDo")) || []
    storeIt.push({time, value})
    window.localStorage.setItem("storedToDo", JSON.stringify(storeIt))

})
var saveToDo = JSON.parse(window.localStorage.getItem("storedToDo"))
$(".description").each(function(){
    let id = $(this).parent().attr("id")
    for (let i = 0; i < saveToDo.length; i++) {
        const element = saveToDo[i];
        if (id === element.time) {
            $(this).text(element.value)
        }
    }
}) 


colorHours()




// text for that event in the time block is saved in local storage


// document.getElementById("saveBtn").addEventListener("click");
// localStorage.setItem("hour", "to do list");
// var timeBlock = localStorage.getItem("hour");




// refresh the page saved events persist









