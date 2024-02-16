let places:string[] = ["bangladesh", "australia", "dynmark","turkey"];
// orginal order
 console.log("Original Order: " , places);
// Alphabatical order without modifying its orginal order:
let alphaplaces = places.sort();
console.log("Alphabatical Order: " ,alphaplaces );
//show that array is still on its orginal order:
alphaplaces.sort();
console.log("Still on its orginal order: ", places);
//print array in reserver alphabatic 
let resplaces = places.slice().sort().reverse();
console.log("Reverse Aphabatically Array: ", resplaces);
//show that array is still on its orginal places 
console.log("Array is still on its orginal: ", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed Order: ", places);

// Reverse the order of the list again
places.reverse();
console.log("Original Order: ", places);

// Sort the array in alphabetical order
places.sort();
console.log("Alphabetical Order: ", places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Reverse Alphabetical Order: ", places);