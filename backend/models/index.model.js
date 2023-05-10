// import files
const User = require('./user.model');
const Course = require('./course.model');
const Assignment = require('./assignment.model.js');
const Submission = require('./submission.model');
const Comment = require('./comment.model');
const Grade = require('./grade.model');
const Announcement = require('./announcement.model');
const Message = require('./message.model');

const {
    FileCollection
} = require('./file.model');


// export files
module.exports = {
    User,
    Course,
    Assignment,
    Submission,
    Comment,
    Grade,
    Announcement,
    Message,
    FileCollection,

};
