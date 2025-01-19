const express = require('express');
const router = express.Router();
const db = require('../services/firebaseConfig'); // Import Firebase config

// Register User
router.post('/users', async (req, res) => {
    try {
        const { name, email, course } = req.body;
        const userRef = db.collection('users').doc();
        await userRef.set({ name, email, course });
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
