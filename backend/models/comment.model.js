const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
 
    commentator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description : {
        type: String,
        required: true,
        trim: true,
    },
    announcement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Announcement',
    },

    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
    },

}, {
    timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;