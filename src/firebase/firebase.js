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

// test it
database.ref().set({
    name: 'Mark Sandora',
    age: 37,
    isSingle: false,
    location: {
        city: 'New York',
        country: 'United States'
    }
});

database.ref('age').set(38);
database.ref('location/city').set('Long Island');
database.ref('attributes').set({
    height: '6 foot',
    weight: '210 lbs'
});