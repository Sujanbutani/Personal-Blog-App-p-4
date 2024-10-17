const Comment = require('../models/commentModel');

// Add a comment
const addComment = async (req, res) => {
    const { content, user, post } = req.body;

    try {
        const newComment = new Comment({ content, user, post });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get comments for a post
const getComments = async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await Comment.find({ post: postId }).populate('user', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a comment
const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content, user, post } = req.body;

    try {
        const comment = await Comment.findById(id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        comment.content = content || comment.content;
        comment.user = user || comment.user;
        comment.post = post || comment.post;

        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        await comment.remove();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addComment, getComments, updateComment, deleteComment };
