const mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    role_name: { type: String },
});

roleSchema.methods.initial = function(name, user_id){
    this.role_name = name;
    this.created_by = user_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Role', roleSchema , 'Roles');