let guestList : string[] = ['Arsalan','Noman','Dominic','Suneel']

let message : string = 'You are cordially invited to Aftar party: '

let absentGuest : string = 'Dominic'

let newGuest : string = 'Taha'

guestList[2] = newGuest

console.log(`\nUnfortunately, Mr. ${absentGuest} is not coming for Aftar party. So, Mr. ${newGuest} is invited instead.`)

guestList.unshift('Rizwan')
guestList.splice(2,0,'Mubeen')
guestList.push('Saad')

for (let i=0; i<guestList.length; i++){

    console.log( '\nDear Mr. ' + guestList[i] + ',\n' + message + '\nThank you!' )

}
console.log('\n"Good news! We found a big table, so are inviting three more guests."')