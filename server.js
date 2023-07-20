const express = require('express');
const allPosts = require('./models/allPosts.js');

const allPostsModel = new allPosts();

const app = express();

const PORT = 4000;
  
app.get('/', (req, res) => {
    res.send('Welcome to Post Web App Backend');
});

app.get('/api/posts', async (req, res) => {
    const posts = await allPostsModel.getAllPosts();
    res.send(posts);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));