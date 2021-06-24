const mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
    position:       { type: Number  },
    name:           { type: String   , index: { unique : true} },
    description:    { type: String  },
    color:          { type: String  }, 
    visible:        { type: Boolean },
    creation_date:  { type: Date     , default: Date.now },
});

boardSchema.methods.initial = function(name, color, visible, description, user_id){
    this.name           = name;
    this.description    = description;
    this.color          = color; 
    this.visible        = visible;
    this.created_by     = user_id;
}

module.exports = mongoose.model('Board', boardSchema , 'boards');