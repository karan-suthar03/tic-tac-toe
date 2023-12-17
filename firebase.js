// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNTf9KDj0uDY06TyfnykDV6tBL1AzNOPc",
    authDomain: "notification-c7662.firebaseapp.com",
    projectId: "notification-c7662",
    storageBucket: "notification-c7662.appspot.com",
    messagingSenderId: "518002918701",
    appId: "1:518002918701:web:3352d0049c592a9131ffa4",
    measurementId: "G-4HVWMNFT5D"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const playerRef = database.ref('player');
var playerData;
var matrix;
playerRef.on('value', (snapshot) => {
    playerData = snapshot.val();
});
const matrixRef = database.ref('matrix');
matrixRef.on('value', (snapshot) => {
    matrix = snapshot.val();
});