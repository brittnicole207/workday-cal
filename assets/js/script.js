//header current date
const currentDate = moment().format('LL');
$('#currentDate').text(currentDate);

//local current date
const localTime = moment().format('HH');
console.log(localTime);

//When the user clicks the button, it will save the information
$('.saveBtn').on

// Display today's day and date
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
//This tracks the current time and returns it in moment
    function timeTracker() {
        let timeNow = moment().hour();

        // This is a loop that will look at the schedule and the time and present the correct class based on the schedule hour and the current time. 
        $(".time-block").each(function () {
            let scheduleHour = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (scheduleHour < timeNow) {
                $(this).removeClass("upcoming");
                $(this).removeClass("current");
                $(this).addClass("former");
            }
            else if (scheduleHour === timeNow) {
                $(this).removeClass("former");
                $(this).removeClass("upcoming");
                $(this).addClass("current");
            }
            else {
                $(this).removeClass("current");
                $(this).removeClass("former");
                $(this).addClass("upcoming");

            }
        })
    }

    // Get item from local storage if any
    $("hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker(); //Runs the time tracker function 
})
