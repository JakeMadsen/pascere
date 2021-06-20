const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const hat = require('hat');

var userSchema = mongoose.Schema({
    local: {
        username:   { type: String, default: null, index: {unique : true} },
        email:      { type: String, default: null, index: {unique : true}},
        password: String,
    },
    profile: {
        registration_date:  { type: Date, default: Date.now },
        birthday:           { type: String, default: null },
        image:              { type: String, default: null }
    },
    permissions: {
        user_private_key: { type: String, default: hat()},
        user_role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
    }
});

// methods ======================
userSchema.methods.initialSignup = function(username, email, password, role_id){
    console.log("Role ID: ", role_id)
    this.local.username = username;
    this.local.email = email;
    this.local.password = this.generateHash(password);
    console.log("Set user_role with role_id")
    this.permissions.user_role  = role_id
    console.log("Success")
}

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// updates main user details
userSchema.methods.updateSettings = async function (body, profilePicture, profileBanner){

    if(this.local.username != body.username && body.username != "")
        this.local.username = body.username;

    if(this.local.email != body.email && body.email != "")
        this.local.email = body.email;

    if(body.password != "" && body.password != this.validPassword(body.password))
        this.local.password = this.generateHash(body.password);


    if(this.profile.profile_image != profilePicture && profilePicture != "" && profilePicture != null)
        this.profile.profile_image = profilePicture;

};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema, 'users');