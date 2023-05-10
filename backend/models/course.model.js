const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        trim: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
    }],
    announcements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Announcement',
    }],

    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
    }],

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],

}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;