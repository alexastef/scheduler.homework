// Script file for Homework 5 - Work Day Schedule
// Wrap entire file in document.ready
$(document).ready(function(){

// Set initial global variables
var hours = ["9AM", "10AM", "11AM", "12PM","1PM", "2PM", "3PM", "4PM", "5PM"];
var savedArr = [];
// Set variable for saved tasks
var savedTasks = JSON.parse(localStorage.getItem("savedTasks"));


getCurrentDate();
showDay();


// Get current date with format Weekday, Date, Month, Year
function getCurrentDate() {
    var currentDay = $("#currentDay");
    getDate = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(getDate);
}

// Render all hour blocks
function showDay() {

    // Loop through hours array to create row for each hour
    // Hour value assigns a numeric value to each 12-hour time that is equal to its 24-hour time
    var hourValue = 8;
    for (var i = 0; i < hours.length; i++) {
        var singleHour = hours[i];
        hourValue++
        createElements(hourValue, singleHour);
    }

};

// Create separate function to contain closure scope
function createElements(hourValue, singleHour) {
    // Create new row
    var newRow = $("<div class='form-row'>");

    // Create new column for the time with paragraph, set paragraph text, and append to column
    var timeCol = $("<div class='col-sm-2 hour'>");
    var timeP = $("<p class='time'>");
    timeP.text(singleHour);
    timeCol.append(timeP);

    // Create new column for textarea input and append input to column, assigning it a data-time attribute and hourValue value
    var inputCol = $("<div class='col-sm-9 input'>");
    const inputArea = $("<textarea class='form-control' rows='3' id='inlineFormInputName' data-time=" + singleHour + ">");
    inputCol.append(inputArea);

    // Create new column for saving with save button and append button to column
    var saveCol = $("<div class='col-sm-1 save'>");
    var saveBtn = $("<button type='button' class='btn saveBtn' data-time=" + singleHour + "><i class='far fa-save fa-lg'>");
    saveCol.append(saveBtn);

    // Create click event for save button clicked that corresponds with the text input
    saveBtn.on("click", function(){
        var newTaskValue = inputArea.val();
        console.log(newTaskValue);
        savedArr.push(newTaskValue);
        console.log(savedArr)

        // Save new task to local storage
        localStorage.setItem("savedTasks", JSON.stringify(savedArr));
    })
    
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

    // Check for local storage
    renderTasks();
    // Render items in local storage - for this, I couldn't figure out how to empty the ones before and only render
    //  to the block the text was originally typed in
    function renderTasks() {
        if (savedTasks !== null) {
            savedArr = savedTasks;
            inputArea.append(savedTasks);
        }
    }
}


});