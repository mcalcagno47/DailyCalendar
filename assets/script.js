$(document).ready(function () {

    $("saveBtn").click(function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    });

    function hourlyUpdate() {
        var currentHour = hours();

        var previousHour = parseInt($(this).attr("id").split("-")[1])

        $(".time-block").each(function () {
            if (currentHour === previousHour) {
                (".time-block").addClass("present");
            } else if (currentHour > previousHour) {
                (".time-block").addClass("future");
            } else {
                (".time-block").addClass("past");
            }
        });
    };

    hourlyUpdate();

    $("#currentDay").text(moment().format("dddd, MMMM Do"))

});