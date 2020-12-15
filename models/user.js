const mongoose = require('mongoose');

// Create a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    website: String
});

// Here is where you will actually name the model
// The model name has to be SINGULAR
const User = mongoose.model('User', userSchema);

// Export this model and make it avaliable to other files
module.exports = User;