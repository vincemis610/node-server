const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    email: { type: 'string', required: 'Please type email'},
    comment: { type: 'string', required: 'Please type comment'}
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('comments', CommentSchema);