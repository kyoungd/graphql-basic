const pubsubPostName = (userId) => {
  return `Post u-${userId}`;
}

const pubsubCommentName = (postId) => {
  return `comment ${postId}`;
}

    
export { pubsubPostName, pubsubCommentName }