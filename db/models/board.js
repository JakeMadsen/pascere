const mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
    name: { type: String, index: {unique : true} },
    creation_date:  { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    position: { type: Number },
    visible: { type: Boolean },
    user_access: { type: Array }
});

boardSchema.methods.initial = function(name, user_id){
    this.name = name;
    this.created_by = user_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Board', boardSchema , 'Boards');