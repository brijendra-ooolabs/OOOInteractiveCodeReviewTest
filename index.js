import BlogSystem from './blogSystem.js';

const blogSystem = new BlogSystem();

blogSystem.auth.registerUser('admin', 'adminpassword');
const isAuthenticated = blogSystem.auth.loginUser('admin', 'adminpassword');

if (isAuthenticated) {
  blogSystem.addPost('First Post', 'This is the content of the first post.', 'admin');
  blogSystem.addPost('Second Post', 'This is the content of the second post.', 'admin');
}

const posts = blogSystem.viewPosts();
console.log(posts);