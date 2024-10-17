const Post = require('../models/postModel');

// Create a post
const createPost = async (req, res) => {
    const { title, content, tags, views, publishedDate, user } = req.body;

    try {
        const newPost = new Post({ title, content, tags, views, publishedDate, user });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific post by ID
const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('user', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, tags, views, publishedDate, user } = req.body;

    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.title = title || post.title;
        post.content = content || post.content;
        post.tags = tags || post.tags;
        post.views = views || post.views;
        post.publishedDate = publishedDate || post.publishedDate;
        post.user = user || post.user;

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a post by ID
const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        await post.remove();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
