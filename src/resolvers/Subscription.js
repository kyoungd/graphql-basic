import { pubsubPostName, pubsubCommentName } from '../util';

const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0;

      setInterval(()=> {
        count++;
        pubsub.publish('count', {
          count
        })
      }, 1000);
      return pubsub.asyncIterator('count');
    }
  },
  comment: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      const post = db.postList.find(p => p.id === postId && p.published)
      if (!post) 
        throw new Error('Post not found');
      const chanName = pubsubCommentName(postId); 
      return pubsub.asyncIterator(chanName);
    }
  },
  post: {
    subscribe(parent, { userId }, { db, pubsub }, info) {
      const user = db.userList.find(u => u.id === userId);
      if (!user)
        throw new Error('User not found');
      const chanName = pubsubPostName(userId);
      return pubsub.asyncIterator(chanName);
    }
  }
}

export { Subscription as default} 