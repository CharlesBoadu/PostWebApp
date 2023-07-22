const Client = require("../database.js");

class Posts {
    async getAllPosts() {
        try {
            const result = await Client.query("SELECT * FROM all_posts");
            return result.rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async createPost(post) {
        try {
            const result = await Client.query(
                "INSERT INTO all_posts (title, body, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING *",
                [post.title, post.body, post.created_at, post.updated_at]
            );
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    async deletePost(id) {
        try {
            const result = await Client.query(
                "DELETE FROM all_posts WHERE id = $1 RETURNING *",
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

module.exports = Posts;
