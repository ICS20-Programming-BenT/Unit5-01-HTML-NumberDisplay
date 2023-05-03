// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 05/02/2023
// This file contains the JS functions for index.html

"use strict";

function NumbersGiven() {
  
  // Declaring variables for numbers and message as empty strings for later on
  let numbers = "";
  let message = "";

  // Getting the user input for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  // Initializing the counter variable to the minimum number
  let counter = minNumber;

  // If statement to check whether minNumber > maxNumber (there is an error)
  if (minNumber > maxNumber) {
    message = "Please be sure that your minimum value is less than or equal to your maximum value.";
  }
    
  // Else, complete the while loop to create list of the numbers between min and max
  else {
    // While loop that specifies the range, so the code within the loop executes as long as the counter is greater than or equal to the minimum and less than or equal to the maximum
    while ((counter >= minNumber) && (counter <= maxNumber)) {

      // Building the string of numbers with a line break
      numbers = numbers + counter + "<br>";

      // Increment the counter with each number
      counter = counter + 1;

      // Set the message variable to display results
      message = "Here are all the numbers between the minimum and maximum that you entered:<br><br>" + numbers;
    }
  }

  // Displaying the results (the range of numbers) back to the user
  document.getElementById("results").innerHTML = message;
}