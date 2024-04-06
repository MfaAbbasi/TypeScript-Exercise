var personName = "Okasha TS Teacher";
var upperCaseName = personName.toUpperCase();
console.log("Uppercase:", upperCaseName);
var lowerCaseName = personName.toLowerCase();
console.log("Lowercase:", lowerCaseName);
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Title Case:", titleCaseName);
