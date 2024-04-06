"use strict";
let guestList = ['Arsalan', 'Noman', 'Dominic', 'Suneel'];
let message = 'You are cordially invited to Aftar party: ';
for (let i = 0; i < guestList.length; i++) {
    console.log('\nDear Mr. ' + guestList[i] + ',\n' + message + '\nThank you!');
}
