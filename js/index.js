



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
apiKey: "AIzaSyCPPLxTq7dZ9-1TQkd2qYPUBrfyJq6Kl70",
authDomain: "first-firebase-project-b893e.firebaseapp.com",
databaseURL: "https://first-firebase-project-b893e.firebaseio.com",
projectId: "first-firebase-project-b893e",
storageBucket: "first-firebase-project-b893e.appspot.com",
messagingSenderId: "722798315891",
appId: "1:722798315891:web:0cd376442274a580d35d06",
measurementId: "G-GHQCGC4YBV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#login', {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            return true;
        },
        uiShown: function() {
            document.getElementById('loader').style.display = 'none';
        }
        },
        signInFlow: 'popup',
        signInSuccessUrl: '/#logged-in',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
],
});

