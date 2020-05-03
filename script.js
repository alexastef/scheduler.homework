// Script file for Homework 5 - Work Day Schedule
// Wrap entire file in document.ready
$(document).ready(function(){

// Set initial global variables
var hours = ["9AM", "10AM", "11AM", "12PM","1PM", "2PM", "3PM", "4PM", "5PM"];
var savedTasks = [];
var saveBtn = $(".saveBtn");

getCurrentDate();
showDay();

// saveBtn.on("click", storeTask()); 

// Get current date with format Weekday, Date, Month, Year
function getCurrentDate() {
    var currentDay = $("#currentDay");
    getDate = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(getDate);
}

// Render all hour blocks
function showDay() {

    // Get any saved tasks from local storage
    localStorage.getItem("savedTasks", savedTasks);

    // Loop through hours array to create row for each hour
    // Hour value assigns a numeric value to each 12-hour time that is equal to its 24-hour time
    var hourValue = 8;
    for (var i = 0; i < hours.length; i++) {
        var singleHour = hours[i];
        hourValue++

        // Create new row
        var newRow = $("<div class='form-row'>");

        // Create new column for the time with paragraph, set paragraph text, and append to column
        var timeCol = $("<div class='col-sm-2 hour'>");
        var timeP = $("<p class='time'>");
        timeP.text(singleHour);
        timeCol.append(timeP);

        // Create new column for textarea input and append input to column, assigning it a data-time attribute and hourValue value
        var inputCol = $("<div class='col-sm-9 input'>");
        var inputArea = $("<textarea class='form-control' rows='3' id='inlineFormInputName' data-time=" + singleHour + "value='" + hourValue +">");
        inputCol.append(inputArea);

        // Create new column for saving with save button and append button to column
        var saveCol = $("<div class='col-sm-1 save'>");
        var saveBtn = $("<button type='button' class='btn saveBtn' data-time=" + singleHour + "><i class='far fa-save fa-lg'>");
        saveCol.append(saveBtn);
        
        // Append timeCol, inputCol, and saveCol to newRow and append newRow to the form
        $("form").append(newRow);
        newRow.append(timeCol, inputCol, saveCol);

        // Get current hour
        var currentHour = moment().hour();

        // If condition for setting the input area colors
        if (currentHour < hourValue) {
            inputArea.addClass("future");
        } else if (currentHour === hourValue) {
            inputArea.addClass("present");
        } else {
            inputArea.addClass("past");
        }

    }
};

$(document).on("click", saveBtn, function() {
// function storeTask() {
    alert("clicked!");

    // var textInput = $("textarea");
    // var newTask = $(textInput).val().trim();
    // console.log(newTask);
})
   
//     // var savedTask = localStorage.setItem("savedTask", userTask);

//     if (newTask == null) {
//         return;
//     } else (savedTasks.push(newTask));

//     console.log(newTask);
//     console.log(savedTasks);
//     localStorage.setItem("savedTasks", savedTasks);
    // var userInput = $(".form-control").value.trim()

    // if (userInput === ""); {
    //     return;
    // } 

    // localStorage.setItem("userTasks", userInput); 
// }



// saveBtn.on("click", function(){
// })

// Create table or rows with cards? Not sure the best way to do this
    // Table needs 9 rows and 3 columns
        // Rows are each an hour block, 9am - 5pm
            // Column 1 is the time/hour
            // Column 2 is the largest block and is the text area
            // Column 3 is the same width as col1 and is save button
                // Save button has rounded corners 

// Create event for timeblocks so that they change color 
    // current timeblock = red
    // past timeblock = gray
    // future timeblock = green

// Create on click event for Save button
    // When user clicks save, timeblock is saved to local storage


// moment().hours(); gets the hour

});