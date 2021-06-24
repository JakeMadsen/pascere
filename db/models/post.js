const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    board_parent:   { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
    author:         { type: mongoose.Schema.Types.ObjectId, ref: 'User'  },
    title:          { type: String  },
    description:    { type: String  },
    visible:        { type: Boolean },
    tags:           { type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Tag' } ] },
    creation_date:  { type: Date,   default: Date.now }
});

postSchema.methods.initial = function(name, user_id){
    this.tag_name = name;
    this.created_by = user_id;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema , 'posts');