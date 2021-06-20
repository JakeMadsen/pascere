const mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    role_name: { type: String },
    role_creator: { type: String },
    role_permissions: { 
        "admin": Boolean,
        "moderator": Boolean,
        "user": Boolean
    }
});

roleSchema.methods.create = function(name, user_id){
    this.role_name = name;
    this.created_by = user_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Role', roleSchema , 'roles');