class User {
  constructor() {}

  static currentUser = {
    user_id: 'xxx',
    firstname: 'first',
    lastname: 'last'
  };

  static getCurrentUser() {
    return this.currentUser.user_id;
  }
  static setCurrentUser(gelen) {
    this.currentUser.user_id=gelen;
  }
}

export default User;