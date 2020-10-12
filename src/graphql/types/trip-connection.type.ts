import { tripType } from './trip.type';
import { connectionDefinitions } from 'graphql-relay';

const { connectionType: tripConnection } = connectionDefinitions({
    nodeType: tripType,
});

export { tripConnection };