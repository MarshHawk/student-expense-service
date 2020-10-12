import { GraphQLObjectType } from 'graphql';
import { addExpenseMutation } from './mutations/trip.mutation';

export const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      addExpenseToTrip: addExpenseMutation,
    }),
  });