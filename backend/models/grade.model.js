const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({

    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    grade: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    
}, {
    timestamps: true,
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
