"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personName = '';
personName = prompt("What is your Name?") || '';
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ", Would you like to learn some python today?"));
}
else {
    alert('you have to write ypur Name!');
}
