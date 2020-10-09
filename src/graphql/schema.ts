import { queryType } from './query';
import { GraphQLSchema } from 'graphql';

export const schema: GraphQLSchema = new GraphQLSchema({
    query: queryType,
});

export default schema;