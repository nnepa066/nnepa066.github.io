// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

//resets date when new expert is chosen
function resetDate() {
    document.getElementById('date').value = "";
}

//modal is closed when "x" is pressed
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["2021-07-01","2021-09-06","2021-10-11", "2021-12-25","2021-12-26","2021-12-27"];
const setDateFormat = "yy-mm-dd";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];    
    if (document.getElementById('expertSelect').value === "Jenn"){
        if (date.getDay() === 3) return [false];
        if (date.getDay() === 6) return [false];
    }
    if (document.getElementById('expertSelect').value === "Michael"){
        if (date.getDay() === 2) return [false];
        if (date.getDay() === 4) return [false];
    }
    if (document.getElementById('expertSelect').value === "Helan"){
        if (date.getDay() === 1) return [false];
        if (date.getDay() === 5) return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);

    return [ unavailableDates.indexOf(string) === -1]
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    // $("#phone").on("change", function(){
    //     if (!validatePhone("phone")){
    //         alert("Wrong format for phone");
    //         $("#phone").val("(xxxx)");
    //         $("#phone").addClass("error");
    //     }
    //     else {
    //         $("#phone").removeClass("error");
    //     }
    // });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $("#date").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('07/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    $('#myBtn').on("click", function(){
        let valid = true;
        $('[required]').each(function() {
          if ($(this).is(':invalid') || !$(this).val()) valid = false;
        })
        if (!valid);
        else $('#myModal').css("display", "block");
      })

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    // $("#debit").on("mouseenter", function(){
    //     $("#debit").addClass("showInput");
    // });

    // $("#debit").on("mouseleave", function(){
    //     $("#debit").removeClass("showInput");
    // });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    // $("#debit").tooltip({
    //     classes: {
    //         "ui-tooltip": "highlight"
    //     }
    // });


});