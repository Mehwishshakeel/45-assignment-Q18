"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit = ["Canada", "Turkey", "Japan", "America", "India"];
//Print your array in its original order.
console.log("original order:", placesToVisit);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...placesToVisit].sort());
//Show that your array is still in its original order by printing it
console.log("still in original order:", placesToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse order:", [...placesToVisit].reverse());
//Show that your array is still in its original order by printing it again
console.log("original order reveresd:", placesToVisit.reverse());
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Back To Original order:", placesToVisit.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("sorted to alphabetical order:", placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("original order reveresd again:", placesToVisit.reverse());
