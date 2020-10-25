import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList, GraphQLID } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';
import tripEventType from './trip-event.type';
import studentType from './student.type';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../node';
import { ITrip } from 'student-expense-types';

// TODO: node interface and global id
export const tripType: GraphQLObjectType<ITrip, any> = new GraphQLObjectType({
    name: 'Trip',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
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