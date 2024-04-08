let car: string = 'subaru';
let fruits: string[] = ['apple', 'banana', 'orange']

console.log("Is car == 'subaru'? I predict True.")                          // Tests for equality with strings
console.log(car == 'subaru')

console.log("Is car != 'toyota'? I predict True.")                          // Tests for inequality with strings
console.log(car != 'toyota')

console.log("Is car.toLowerCase() == 'subaru'? I predict True.")            // Tests using the lower case function
console.log(car.toLowerCase() == 'subaru')

console.log("Is 10 < 20? I predict True.")                                  // Numerical tests
console.log(10 < 20)

console.log("Is 10 >= 20? I predict False.")
console.log(10 >= 20)

console.log("Is car == 'subaru' && 10 < 20? I predict True.")               // Tests using "and"
console.log(car == 'subaru' && 10 < 20)

console.log("Is car == 'toyota' || 1 < 2? I predict True.")                 // Tests using "or"
console.log(car == 'toyota' || 10 < 20)

console.log("Is 'banana' in fruits array? I predict True.")                 // Test whether an item is in an array
console.log(fruits.includes('banana'))

console.log("Is 'kiwi' not in fruits array? I predict True.")               // Test whether an item is not in an array
console.log(!fruits.includes('kiwi'))
