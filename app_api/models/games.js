const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
name: {
    type: String,
    required: true},
ageRating: String,
rating: {
    type: Number,
    'default': 0,
    min: 0,
    max:10
},
availability: String,
price: String 
},{versionKey: false
});

mongoose.model('Game',gamesSchema);