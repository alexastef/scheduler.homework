# scheduler.homework
Creating a day schedule with dynamic elements

For this assignment, I started with an html file with minimal html elements. I used Bootstrap for the most part for formatting and made some additions to provided CSS file. 

From there I created my table dynamically using jQuery. I set the script inside a document.ready function and defined a few initial global variables, including hours 9-5 as an array. 

To get all the elements on the page, I looped through the hours array and created an hour block, text area, and save button for each hour. I assigned values to each hour so that I could compare and updated them based on the current time. I also incorporated the save click event inside this function so that the save buttons save the text input in the corresponding value textarea. 

I had some trouble getting the local storage, although it set. When I retrieve the local storage data, the entire array populates in every box instead of just the most recent saved text populating into every textarea. 
