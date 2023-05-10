const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    data : {
        type : String,
        required : true
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],
}, {
    timestamps: true,
})

const File = mongoose.model('File',fileSchema);
module.exports = File;