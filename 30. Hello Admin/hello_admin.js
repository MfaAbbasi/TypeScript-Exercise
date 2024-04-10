"use strict";
let usernames = ["Admin", "Fawad", "Noman Aziz", "Noman Yousuf", "Arsalan"];
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello Admin, Would like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, Thank you for logging again.`);
    }
}
