const mongoose = require('mongoose');

var voteSchema = mongoose.Schema({
    post_parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    amount: { type: Number },
    voters: { type: Array }
});

voteSchema.methods.initial = function(post_id){
    this.post_parent = post_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Vote', voteSchema , 'votes');