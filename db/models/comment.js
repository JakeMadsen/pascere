const mongoose = require('mongoose');
const hat = require('hat')

var commentSchema = mongoose.Schema({
    commentId:      hat(),
    parent:         {
        type:   { type: String, required: true }, // Type can be Post or Comment - Used to determene whether its a top post or a nested post.
        id:     { type: String, required: true }
    },
    author:         { type: mongoose.Schema.Types.ObjectId, ref: User },
    text:           { type: String },
    date:           { type: Date, default: Date.now },
    edited:         { type: Boolean },
    softDeleted:    { type: Boolean },
    history:        { type: Array }
});

module.exports = mongoose.model('Comment', commentSchema , 'comments');