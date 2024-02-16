var guestlist: string[] = ["Ahmed", "Shehzad", "Irfan", "Faheem"];
console.log("Orgional list of guest: " + guestlist);

console.log("\nSorry, only two guest are invited:");

// guest remove at a time from array
while (guestlist.length > 2) {
    let guestRemove = guestlist.pop();
    console.log("\nSorry, " + guestRemove + "you can't be invited: ");
}
// invited list
for (var j = 0; j < guestlist.length; j++) {
    console.log("\nYou are still invited " + guestlist[j]);
}