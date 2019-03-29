const Post = {
  author(parent, args, { db }, info) {
    return db.userList.find((user)=> {
      return user.id === parent.author
    })
  },
  comments(parent, args, { db }, info) {
    return db.commentList.filter((comment) => {
      return comment.entry === parent.id
    })
  }
}

export { Post as default }
