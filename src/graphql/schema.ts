import { queryType } from './query';
import { GraphQLSchema } from 'graphql';
import { mutationType } from './mutation';

export const schema: GraphQLSchema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
});

export default schema;