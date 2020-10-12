import { GraphQLObjectType } from 'graphql';
import { connectionFromPromisedArray } from 'graphql-relay';
import { tripConnection } from './types/trip-connection.type';
import { getTrips } from '../gateways/trip.gateway';
import { nodeField } from './node';

export const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    trips: {
      type: tripConnection,
      resolve: (_, args) => connectionFromPromisedArray(getTrips(), args)
    },
    node: nodeField
  }),
});