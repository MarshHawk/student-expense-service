import { GraphQLObjectType } from 'graphql';
import { nodeDefinitions, globalIdField, fromGlobalId, connectionFromArray, connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,  } from 'graphql-relay';
import trip from './types/trip.type';
import {tripConnection} from './types/trip-connection.type';
import { getTrips } from '../gateways/trip.gateway';

export const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      trips: {
          type: tripConnection,
          resolve: (_, args) => connectionFromPromisedArray(getTrips(), args)
      }
    }),
  });