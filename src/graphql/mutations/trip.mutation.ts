import { GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { addExpenseToTrip } from '../../gateways/trip.gateway';
import { tripType } from '../types/trip.type';
import { GraphQLNonEmptyString } from 'graphql-scalars';

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
            type: new GraphQLNonNull(GraphQLNonEmptyString),
        }
    },
    outputFields: {
        trip: {
            type: tripType
        }
    },
    mutateAndGetPayload: ({ tripId, studentName, amount }) => {
        const trip = addExpenseToTrip(tripId, studentName, amount);
        return { trip };
    },
});