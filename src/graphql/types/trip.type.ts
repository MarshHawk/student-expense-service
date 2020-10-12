import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList, GraphQLID } from 'graphql';
import { GraphQLDateTime, GraphQLNonEmptyString, GraphQLNonNegativeFloat, } from 'graphql-scalars';
import tripEventType from './trip-event.type';
import studentType from './student.type';
import { mutationWithClientMutationId } from 'graphql-relay';
import { addExpenseToTrip } from '../../gateways/trip.gateway';

/* const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
      const { type, id } = fromGlobalId(globalId);
      if (type === 'Faction') {
        return getFaction(id);
      }
      if (type === 'Ship') {
        return getShip(id);
      }
    },
    (obj) => (obj.ships ? factionType : shipType),
  ); */

// TODO: node interface and global id
export const tripType = new GraphQLObjectType({
    name: 'Trip',
    //interfaces: [nodeInterface],
    fields: () => ({
        //id: globalIdField(),
        title: {
            type: GraphQLNonNull(GraphQLString)
        },
        startTime: {
            type: GraphQLDateTime
        },
        endTime: {
            type: GraphQLDateTime
        },
        total: {
            type: GraphQLNonNull(GraphQLFloat)
        },
        average: {
            type: GraphQLNonNull(GraphQLFloat)
        },
        students: {
            type: GraphQLList(studentType)
        },
        expenses: {
            type: GraphQLList(tripEventType)
        }
    }),
});