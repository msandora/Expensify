import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyG1DJk9wSueElpx1CtIPPRHWoxy7qvEc",
    authDomain: "expensify-7e5ef.firebaseapp.com",
    databaseURL: "https://expensify-7e5ef.firebaseio.com",
    projectId: "expensify-7e5ef",
    storageBucket: "expensify-7e5ef.appspot.com",
    messagingSenderId: "267666416442",
    appId: "1:267666416442:web:06b6b370d7885fa193a603"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();



database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
});

database.ref('expenses').push({
    description: 'Phone Bill',
    note: '',
    amount: 5900,
    createdAt: 976123498763
});

database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 976123498763
});



// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });



// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// const onValueChange = (snapshot) => {
//     console.log(snapshot.val());
// };

// // var adaRef = firebase.database().ref('isSingle');

// database.ref().on('value', onValueChange);

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(38);
// }, 10500);

// Fetching data from database
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);

//     })
//     .catch((e) => {
//         console.log("error fetching data", e)
//     });

// test set method
// database.ref().set({
// 	name: 'Mark Sandora',
// 	age: 37,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'True Earth Health'
//     },
// 	location: {
// 		city: 'New York',
// 		country: 'United States'
// 	}
// }).then(() => {
//     console.log("Data is saved")
// }).catch((e) => {
// 	console.log("1st error", e)
// });

// test remove method to remove data
// database.ref()
// 	.remove()
// 	.then(function() {
// 		console.log("Remove succeeded.")
// 	})
// 	.catch(function(e) {
// 		console.log("Remove failed: " + e.message)
// 	});

// Use set method to remove data
// database.ref('isSingle').set(null);


// Updating multiple things in one shot, must be an object
// database.ref().update({
// 	name: 'Mike',
// 	age: 29,
//     isSingle: null,
//     job: 'Comedian',
//     // This only updates ate the root level, in order to change something that is nested you need to provide path as string
//     'location/city': 'Boston'
// });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// });





// database.ref('age').set(38);
// database.ref('location/city').set('Long Island');

// database.ref('attributes').set({
//     height: '75',
//     weight: '150'
// }).then(() => {
// 	console.log("Data is saved") // successful sync to db
// }).catch((e) => {
//   console.log("2nd error", e) // This is the error
// });

// console.log('I made a request to change the data')