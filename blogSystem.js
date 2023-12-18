import Auth from './auth.js';
import Post from './post.js';

class BlogSystem {
    constructor() {
      this.auth = new Auth();
      this.posts = [];
    }
  
    addPost(title, content, username) {
      const post = new Post(title, content);
      this.posts.push(post);
      console.log(`Post added by ${username}`);
    }
  
    viewPosts() {
      return this.posts.map(post => ({ title: post.title, createdAt: post.createdAt }));
    }
  }

export default BlogSystem;