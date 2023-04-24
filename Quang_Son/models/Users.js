const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    FirstName: {
        type: String,
        require:false
    },
    LastName: {
        type: String,
        require:false
    },
    Mobile: {
        type: String,
        require:false
    },
    UserName: {
        type: String,
        require:false
    },
    Password: {
        type: String,
        require:false
    }
},{
    collection: "Users"
});
module.exports = mongoose.model('Users', UsersSchema);

