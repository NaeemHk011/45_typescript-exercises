const usernames = ["Naeem", "Hussain", "admin", "Irfan", "Shehzad"]
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin would you like to see status report?")
    }
    else {
        console.log("Hello " + username + "Thank you for logging again ");
    }
}
