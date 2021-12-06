const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {collection : 'users',versionKey: false});

mongoose.model('User',userSchema);
