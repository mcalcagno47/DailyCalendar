$(document).ready(function () {

    $(".saveBtn").on("click", (function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    }));

    function timeCheck() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var previousHour = parseInt($(this).attr("id").split('-')[1]);

            if (currentHour === previousHour) {
                $(this).addClass("present");
            } else if (currentHour > previousHour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }
        });
    };

    timeCheck();

    var updater = setInterval(timeCheck, 15000);

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))

    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));

});