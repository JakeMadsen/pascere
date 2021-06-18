const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    board_parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
    title: { type: String },
    description: { type: String },
    creation_date:  { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags: { type: Array },
    votes: { type: Number },
    visible: { type: Boolean }
});

postSchema.methods.initial = function(name, user_id){
    this.tag_name = name;
    this.created_by = user_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema , 'Posts');