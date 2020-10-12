import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql';
import { GraphQLDateTime, } from 'graphql-scalars';
import tripEventType from './trip-event.type';
import studentType from './student.type';

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
export default new GraphQLObjectType({
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