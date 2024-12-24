// Import Mongoose
const mongoose = require('mongoose');

// MongoDB Connection String
const mongoURI = "mongodb://localhost:27017/databasename"; 

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log("Connected to MongoDB successfully!");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Define a sample schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create the model
const User = mongoose.model('User', userSchema);

// Create and save a sample user
const newUser = new User({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
});

newUser.save()
.then(() => {
  console.log("User saved successfully!");
})
.catch((err) => {
  console.error("Error saving user:", err);
});
