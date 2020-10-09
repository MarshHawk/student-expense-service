import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { GraphQLDateTime, } from 'graphql-scalars';
import tripEventType from './trip-event.type';
import studentType from './student.type';

// TODO: node interface and global id
export default new GraphQLObjectType({
    name: 'Trip',
    //interfaces: [nodeInterface],
    fields: () => ({
        //id: globalIdField(),
        title: {
            type: GraphQLString
        },
        startTime: {
            type: GraphQLDateTime
        },
        endTime: {
            type: GraphQLDateTime
        },
        total: {
            type: GraphQLFloat
        },
        average: {
            type: GraphQLFloat
        },
        students: {
            type: studentType
        },
        events: {
            type: tripEventType
        }
    }),
});