const express = require('express');
const Posts = require('./models/Posts.js');
const cors = require('cors');




const postsModel = new Posts();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
 
const PORT = 4000;
  
app.get('/', (req, res) => {
    res.send('Welcome to Post Web App Backend');
});

app.get('/posts', async (req, res) => {
    const posts = await postsModel.getAllPosts();
    res.send(posts);
});

app.post('/post/create', async (req, res) => {
    const post = await postsModel.createPost(req.body);
    res.send(post);
});
 
app.delete('/post/delete/:id', async (req, res) => {
    const post = await postsModel.deletePost(req.params.id);
    res.send(post);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));