import { toASCII } from "punycode";

let personName : string = '';

personName = prompt("What is your Name?") || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Would you like to learn some python today?`)
}
else{
    alert('you have to write ypur Name!')
}