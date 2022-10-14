const express = require('express');
const router = express.Router();
const { getComments, getComment, updateComment, addCommment, deleteComment} = require('../controllers/comments')

router.get('/', getComments)

    .get('/:id', getComment)

    .post('/', addCommment)

    .put('/:id', updateComment)

    .delete('/:id', deleteComment)

module.exports = router;