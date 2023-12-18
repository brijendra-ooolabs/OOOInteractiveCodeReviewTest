class Auth {
    constructor() {
      this.users = {};
    }
  
    registerUser(username, password) {
      this.users[username] = password;
    }
  
    loginUser(username, password) {
      return this.users[username] === password;
    }
  }

export default Auth;