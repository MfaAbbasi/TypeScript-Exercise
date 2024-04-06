let personName: string = "Okasha TS Teacher";

let upperCaseName: string = personName.toUpperCase();
console.log("Uppercase:", upperCaseName);

let lowerCaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowerCaseName);

let titleCaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Title Case:", titleCaseName);
