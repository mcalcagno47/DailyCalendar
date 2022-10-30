$(document).ready(function () {

    $(".saveBtn").on("click", (function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    }));

    function hourlyUpdate() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var previousHour = parseInt($(this).attr("id").split("-")[1])

            if (currentHour === previousHour) {
                $(this).addClass("present");
            } else if (currentHour > previousHour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("past");
            }
        });
    };

    hourlyUpdate();

    $("#currentDay").text(moment().format("dddd, MMMM Do"))

    $("#9am .description").val(localStorage.getItem("9am"));

});