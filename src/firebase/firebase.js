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


// var adaRef = firebase.database().ref('isSingle');




// test set method
database.ref().set({
	name: 'Mark Sandora',
	age: 37,
	isSingle: false,
	location: {
		city: 'New York',
		country: 'United States'
	}
}).then(() => {
    console.log("Data is saved")
}).catch((e) => {
	console.log("1st error", e)
});

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

database.ref().update({
	name: 'Mike',
	age: 29,
	isSingle: true
});







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