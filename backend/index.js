require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PostModel = require('./models/Posts')

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.post('/api/posts', async (req, res) => {
    try {
        const { title, date, time, read, content, tags } = req.body;
        const newPost = new PostModel({ title, date, time, read, content, tags });    
        await newPost.save();
        
        res.status(201).json({ message: 'Post created successfully', post: newPost });
      } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Server error' });
      }
})

app.get('/post/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/', async (req, res) => {
    const posts = await PostModel.find();
    res.send(posts)

})

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
