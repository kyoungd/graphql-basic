import uuidv4 from 'uuid/v4';
import { pubsubPostName } from '../util';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const isEmailTaken = db.userList.some((u) => u.email.toLowerCase() === args.data.email.toLowerCase())
    if (isEmailTaken) {
      throw new Error('Email taken.');
    }
    const user = {
      id: (!args.data.id ? uuidv4() : args.data.id),
      ...args.data,
    }
    db.userList.push(user);
    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.userList.findIndex(u => u.id === args.id);
    if (userIndex < 0)
      throw new Error('User does not exist');
    const users = db.userList.splice(userIndex, 1); 
    db.commentList = db.commentList.filter(c => c.entry.author !== args.id);
    db.postList = db.postList.filter(p => p.author !== args.id);
    return users[0];
  },
  updateUser(parent, args, { db }, info) {
    const user = db.userList.find(u => u.id === args.data.id);
    if (!user)
      throw new Error('User does not exist');
    if (typeof args.data.email === 'string') {
      const isEmailFound = db.userList.some(u => u.email === args.data.email)
      if (!isEmailFound || user.email === args.data.email) {
        throw new Error('Email already exist')
      }
    }
    user.email = args.data.email;
    if (typeof args.data.name === 'string')
      user.name = args.data.name;
    if (typeof args.data.age !== undefined)
      user.age = args.data.age;
    return user;
  },
  createPost(parent, args, { db, pubsub }, info) {
    const isUserExist = db.userList.some(u => u.id === args.data.author)
    if (!isUserExist)
      throw new Error('User does not exist');
    const post = {
      id: (!args.data.id ? uuidv4() : args.data.id),
      ...args.data,
      }
    db.postList.push(post);
    const chanName = pubsubPostName(args.data.author);
    const chanValue = { post: {
      action: "CREATED",
      data: post
    }}
    pubsub.publish(chanName, chanValue)
    return post;
  },
  updatePost(parent, args, { db }, info) {
    const { data } = args;
    const post = db.postList.find(p => p.id === data.id);
    if (!post)
      throw new Error('Post does not exist');
    post.title = (typeof data.title === 'string' ? data.title : post.title);
    post.body = (typeof data.body === 'string' ? data.body : post.body);
    post.published = (typeof data.published === 'string' ? data.published : post.published);
    return post;
  },
  deletePost(parent, args, { db }, info) {
    const isPostExist = db.PostList.some(p => p.id === args.id)
    if (!isPostExist)
      throw new Error('Post does not exist');
    const arrayIndex = db.postList.findIndex(p => p.id === args.id);
    const posts = db.postList.splice(arrayIndex, 1);
    db.commentList = db.commentList.filter(c => c.entry !== args.id);
    db.postList = db.postList.filter(p => p.id !== args.id);
    return post[0];
  },
  createComment(parent, args, { db, pubsub }, info) {
    const isPostExist = db.postList.some(p => p.id === args.data.id);
    if (isPostExist)
      throw new Error("Post already exist.");
    const comment = {
      id: uuidv4(),
      ...args.data,
    }
    db.commentList.push(comment);
    const pubChan = `comment ${args.data.entry}`;
    const pubValue = { comment }
    pubsub.publish(pubChan, pubValue)
    return comment;
  },
  updateComment(parent, args, { db }, info) {
    const { data } = args;
    const comment = db.commentList.find(c => c.id === data.id);
    if (!comment)
      throw new Error('Comment does not exist.');
    comment.text = data.text;
    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    const isPostExist = db.postList.some(p => p.id === args.id);
    if (!isPostExist)
      throw new Error("Post does not exist.");
    const arrayIndex = db.commentList.findIndex(c => c.id === args.id);
    const comments = db.commentList.splice(arrayIndex, 1);
    return comments[0];
  }
}

export { Mutation as default }
