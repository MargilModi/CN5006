// Import Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/databasename', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));

// Define Schema
const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  salary: Number
});

// Create Model
const PersonModel = mongoose.model('Person', PersonSchema, 'personCollection');

// Fetch Data - Task 1: Return All Documents (Limited to 5)
PersonModel.find().limit(5)
.then((docs) => {
  console.log("All Documents (Limited to 5):");
  console.log(docs);
})
.catch((err) => {
  console.error("Error Fetching Data:", err);
});

// Fetch Data - Task 2: Return Documents with Filtering Criteria
PersonModel.find({ gender: "Female", age: { $gte: 25 } })
.then((docs) => {
  console.log("Filtered Documents (Females Age >= 25):");
  console.log(docs);
})
.catch((err) => {
  console.error("Error Fetching Data:", err);
});
