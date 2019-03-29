const User = {
  posts(parent, args, { db }, info) {
    return db.postList.filter((post) => {
      return post.author === parent.id
    })
  }
}

export { User as default }
