// OBJECT DESTRUCTURING

// const person = {
//     name: 'Mark',
//     age: 36,
//     location: {
//         city: 'Long Island',
//         temp: 62
//     }
// };

// // const name = person.name;
// // const age = person.age;

//         // Rename name variable & Set Default value 'Anonymous' for name 
// const { name: firstName = 'Anonymous', age } = person; // Same thing as above // Destructuring code
// console.log(`${firstName} is ${age}.`);


//             //Rename temp variable
// const { city, temp: tempature } = person.location; // Destructuring code
// if (city && tempature) {
//     console.log(`It is ${tempature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`); //Penguin, Self-Published



// ARRAY DESTRUCTURING

// const address = ['884 Tyler Street', 'Long Island', 'New York', '11010'];
// // const [street, city, state, zip] = address;
// const [, , state = 'NY'] = address; // If you only need city and state variables
// console.log(`You are in ${state}`); 


const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);