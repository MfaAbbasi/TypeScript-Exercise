let guestList : string[] = ['Arsalan','Noman','Dominic','Suneel']

let message : string = 'You are cordially invited to Aftar party: '

let absentGuest : string = 'Dominic'

let newGuest : string = 'Taha'

guestList[2] = newGuest

guestList.unshift('Rizwan')
guestList.splice(2,0,'Mubeen')
guestList.push('Saad')

console.log('\nUnfortunately, We just found out that our new dinner table won’t arrive in time for the dinner,\nand we have space for only two guests.\n')

while (guestList.length >2){
    let removeGuest = guestList.pop()
    console.log(`Dear Mr. ${removeGuest}, \nWe appologize we can not invite you for Aftar party.\n`)
}

for (let i=0; i<guestList.length; i++){

    console.log( '\nDear Mr. ' + guestList[i] + ',\nYou are still invited.\nThank you!' )

 }
guestList.length = 0
console.log('\nupdated guest list:', guestList)