const Client = require("../database.js");

class AllPosts {
    async getAllPosts() {
        try {
            const result = await Client.query("SELECT * FROM all_posts");
            return result.rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

module.exports = AllPosts;
