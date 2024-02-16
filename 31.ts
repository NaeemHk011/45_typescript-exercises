let usernames: string[] = ["ali", "arsalan"]; 

if (usernames.length === 0) {
  console.log("We need to find some users!"); // print message if list is empty
}

usernames = []; // remove all usernames from array

if (usernames.length === 0) {
  console.log("All usernames have been removed!"); // print message to confirm removal
}
