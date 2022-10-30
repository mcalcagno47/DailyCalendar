$(document).ready(function () {

    $(".saveBtn").on("click", (function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    }));

    function timeCheck() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var previousHour = parseInt($(this).attr("id").split("-")[1]);

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

    $("#currentDay").text(moment().format("dddd, MMMM Do, hh:mm"))

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});