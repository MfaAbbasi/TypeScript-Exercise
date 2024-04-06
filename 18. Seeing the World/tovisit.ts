let placesToVisit: string[] = ['Makka', 'Madina', 'America', 'Canada', 'Italy' , 'Egypt'] // array of places

console.log(placesToVisit,'Original order:')

console.log([...placesToVisit].sort(),'Alphabetical order:') // alphabetical without modifying

console.log(placesToVisit,'Original order after sorting:') // still in its original

console.log([...placesToVisit].sort().reverse(),'Reverse alphabetical order:') // reverse alphabetical without changing the original

console.log(placesToVisit,'Original order after reverse sorting:') // still in its original

placesToVisit.reverse() // Reverse the order of the list

console.log(placesToVisit,'Reversed order:') // Print to show its order has changed

placesToVisit.reverse() // Reverse the order of the list again to get back to the original

console.log(placesToVisit,'Back to original order:') // Print to show it's back to its original

placesToVisit.sort() // Sort in alphabetical

console.log(placesToVisit,'Sorted in alphabetical order:') // Print to show its order has changed

placesToVisit.sort((a, b) => b.localeCompare(a)) // Sort in reverse alphabetical

console.log(placesToVisit,'Sorted in reverse alphabetical order:') // Print to show its order has changed