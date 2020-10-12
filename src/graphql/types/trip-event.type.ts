import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';

export default new GraphQLObjectType({
    name: 'TripEvent',
    fields: () => ({
        studentName: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat,
        },
        type: {
            type: GraphQLFloat,
        },
        createdAt: {
            type: GraphQLDateTime
        }
    }),
});