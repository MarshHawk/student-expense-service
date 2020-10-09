import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

export default new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        totalTripExpenses: {
            type: GraphQLFloat,
        }
    }),
});