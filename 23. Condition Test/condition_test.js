"use strict";
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True."); // 01 Test for True
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict False."); // 02 Test for False
console.log(car == 'honda');
console.log("Is car === 'subaru'? I predict True."); // 03 Test for True
console.log(car === 'subaru');
console.log("Is car != 'subaru'? I predict False."); // 04 Test for False
console.log(car != 'subaru');
console.log("Is car.length > 04? I predict True."); // 05 Test for True
console.log(car.length > 4);
console.log("Is car < 4? I predict False."); // 06 Test for False
console.log(car.length < 4);
console.log("Is car upper case == 'SUBARU'? I predict True."); // 07 Test for True
console.log(car.toUpperCase() == 'SUBARU');
console.log("Is car.include('bao')? I predict False."); // 08 Test for False
console.log(car.includes('bao'));
console.log("Is car.startswith('sub')? I predict True."); // 09 Test for True
console.log(car.startsWith('sub'));
console.log("Is car.endswith ('da')? I predict True."); // 10 Test for False
console.log(car.endsWith('da'));
