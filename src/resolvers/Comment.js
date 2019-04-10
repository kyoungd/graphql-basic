const Comment = {
  entry(parent, args, { db }, info) {
    return db.postList.find(p => p.id === parent.entry);
  }
}

export { Comment as default }