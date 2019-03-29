const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.userList;
    }
    return db.userList.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    });
  },
  me(parent, args, { db }, info) {
    return {
      id: '123098',
      name: 'Jim',
      email: 'jim@email.com',
      age: 28
    }
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.postList;
    }
    return db.postList.filter((post)=> {
      return post.title.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  comments(parent, args, { db }, info) {
    return db.commentList;
  }
}

export { Query as default }
