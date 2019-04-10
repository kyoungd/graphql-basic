import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Comment from './resolvers/Comment';
import Post from './resolvers/Post';
import User from './resolvers/User';
import Subscription from './resolvers/Subscription';

// Scalr types = String, Boolean, Int, Float, ID

const pubsub = new PubSub();

// context has db object, and tehy are availabe on all method inside the resolver through context parameter.
// We use { db } to decompose parameter
const servers = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Comment,
    Post,
    User
  },
  context: {
    db,
    pubsub
  }
});

servers.start(()=> {
  console.log('the server is up.')
})
