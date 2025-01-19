const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => res.send('Study Buddy App is running!'));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
