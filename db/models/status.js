const mongoose = require('mongoose');
const User = require('./user');

var statusSchema = mongoose.Schema({
    name:           { type: String, index: {unique : true} },
    color:          { type: String },
    creation_date:  { type: Date, default: Date.now }
});

statusSchema.methods.initial = function(name, color){
    this.name = name;
    this.color = color;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Status', statusSchema , 'Statuses');