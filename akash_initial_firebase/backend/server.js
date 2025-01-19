// Start the server
const PORT = 8000;


// Import Firebase Admin SDK
const admin = require('firebase-admin');
const express = require('express'); // Web framework for backend

// Load Firebase credentials
const serviceAccount = require('./firebase-key.json'); // Replace with your downloaded key file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-crud-project-4844d-default-rtdb.firebaseio.com/", // Replace with your Firebase Realtime Database URL
});

// Initialize Express server
const app = express();
app.use(express.json()); // Handle JSON data in requests

// Add a route to test the Firebase connection
app.get('/', async (req, res) => {
  try {
    const db = admin.database(); // Access Realtime Database
    res.send('Firebase connected successfully!');
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Add a route to send test data to Firebase
app.get('/send-test-data', async (req, res) => {
  try {
    // Example data to send to Firebase
    const testData = {
      email: req.body.email || 'akash@example.com',
      phoneNumber: req.body.phoneNumber || '123-456-7890',
      instagramId: req.body.instagramId || '@exampleUser',
      interestFocus: req.body.interestFocus || 'Technology, Engineering, Robotics'
    };

    // Save the data to Firebase Realtime Database
    const db = admin.database();
    const ref = db.ref('users'); // Set the reference to 'users'
    
    // Create a new child record under 'users'
    const newUserRef = ref.push();
    await newUserRef.set(testData); // Store the data

    // Respond to the request
    res.status(200).json({
      message: 'Data saved successfully!',
      data: testData,
    });
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
