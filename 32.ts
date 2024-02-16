let firstArray: string[] = ["Naeem", "Hussain", "Shehzad", "Faheem", "Ahmed"];
let secarray: string[] = ["bilal", "Shehzad", "hussain", "Faheem", "ahmed"];

for (let newUser of secarray) {
  let isUserTaken = false;
  for (let currentUser of firstArray) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      console.log(`The username ${newUser} is already taken. Please choose a different username.`);
      isUserTaken = true;
      break;
    }
  }
  if (!isUserTaken) {
    console.log(`The username ${newUser} is available.`);
  }
}
