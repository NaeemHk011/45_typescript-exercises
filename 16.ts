var guestlist: string[] = ["Ahmed", "Shehzad", "Irfan", "Faheem"];
// Ahmed can't join our dinner so remove this
const rglist = guestlist.indexOf("Ahmed");
guestlist.splice(rglist, 2);

// as we found new bigger table
// add guest in beggning of array
guestlist.unshift("Shehzad");
// add guest in middle of array
guestlist.splice(2, 0, "Zia khan");
// add new guest at the end of array
guestlist.push("Rashid");

for (var m = 0; m < guestlist.length; m++) {
    console.log(`Dear ${guestlist[m]}, 
    I would like to invitation for you to join me for dinner.
     Best Regards, 
     [Naeem Hussain]
    `)
}

