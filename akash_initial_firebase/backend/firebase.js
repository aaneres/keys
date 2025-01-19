const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json'); // Path to your service account key

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sample-crud-project-4844d-default-rtdb.firebaseio.com/", // Replace with your Firebase project URL
});

const db = admin.firestore();

module.exports = db; // Export Firestore database instance
