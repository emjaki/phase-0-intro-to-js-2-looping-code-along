// Code your solutions in this file
guests = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(guests, event) {
    const messages = [];
    for (let i=0; i < guests.length; i++) {
           const message = `Thank you, ${guests[i]}, for the wonderful ${event} gift!\n`;
           messages.push(message);
        }
        return messages;  
    }

let count;

function countDown(count) {
    while (count > -1) {
        console.log(count);
        count--;
    }
}





