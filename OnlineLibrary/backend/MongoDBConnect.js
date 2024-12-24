const mongoose = require('mongoose');

// MongoDB connection string
const MONG_URI = 'mongodb://localhost:27017/BooksData';

// Connect to MongoDB
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Handle connection events
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Error connecting to MongoDB:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Export the connection
module.exports = db;
