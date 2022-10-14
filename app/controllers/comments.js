const { handleError } = require('../helpers/handleError');
const Comments = require('../models/comments');

const getComments = async(req, res) => {
    try {
        const response = await Comments.find();
        if(response.length <= 0 ){
            return res.json({msg: 'No data found'})
        }
        return res.json(response);
    } catch(e) {
        return handleError(res, e);
    }
}

const getComment = async(req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comments.findById(id)
        return res.json(comment);
    } catch (e) {
        return handleError(res, e);
    }
}

const addCommment = async (req, res) => {
    try {
        const data = req.body;
        const comment = new Comments(data)
        await comment.save();
        return res.json(comment);
    } catch (e) {
        //return res.json({ err: e.message })
        return handleError(res, e);
    }
}

const updateComment = async (req, res) => {
    try {
        const { id } = req.params; 
        const data = req.body;
        const commentUpdated = await Comments.findByIdAndUpdate(id, data, { new: true });
        return res.json(commentUpdated);
    } catch (e) {
        return handleError(res, e);
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params; 
        const commentDeleted = await Comments.findByIdAndRemove(id);
        return res.json(commentDeleted);
    } catch (e) {
        return handleError(res, e);
    }
}

module.exports = { getComments, getComment, addCommment, updateComment, deleteComment }