const mongoose = require('mongoose');
const User = require('./user');

var statusSchema = mongoose.Schema({
    name: { type: String, index: {unique : true} },
    creation_date:  { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    color: { type: String },
    position: { type: Number},
    visible: { type: Boolean }
});

statusSchema.methods.initial = function(name, user_id, color){
    this.name = name;
    this.created_by = user_id;
    this.color = color;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Status', statusSchema , 'Statuses');