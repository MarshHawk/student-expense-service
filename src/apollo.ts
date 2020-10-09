import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/schema';

export default new ApolloServer({
    schema,
    // TODO: .env config for playground
    playground: true
  });