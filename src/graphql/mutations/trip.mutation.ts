import { GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { addExpenseToTrip, getTripById } from '../../gateways/trip.gateway';
import { tripType } from '../types/trip.type';
import { GraphQLNonEmptyString, GraphQLNonNegativeFloat } from 'graphql-scalars';

export const addExpenseMutation = mutationWithClientMutationId({
    name: 'AddExpenseToTrip',
    inputFields: {
        tripId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        studentName: {
            type: new GraphQLNonNull(GraphQLNonEmptyString),
        },
        amount: {
            type: new GraphQLNonNull(GraphQLNonNegativeFloat),
        }
    },
    outputFields: {
        trip: {
            type: tripType,
            resolve: (payload) => getTripById(fromGlobalId(payload.tripId).id)
        }
    },
    mutateAndGetPayload: ({ tripId, studentName, amount }) => {
        addExpenseToTrip(tripId, studentName, amount);
        return { tripId };
    },
});