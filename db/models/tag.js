const mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
    name: { type: String, index: {unique : true} }
});

tagSchema.methods.initial = function(name){
    this.name = name;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Tag', tagSchema , 'tags');