import { GraphQLObjectType } from 'graphql';
import trip from './types/trip.type';

export const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      trips: {
          type: trip,
      }
    }),
  });