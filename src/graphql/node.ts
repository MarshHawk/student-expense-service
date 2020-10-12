import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { getTripById } from "../gateways/trip.gateway";
import { tripType } from "./types/trip.type";

// Todo type constants solution
const typesReducer = (type: string) => {
    switch (type) {
        case "Trip": {
          return getTripById;
        }
        default:
            throw 'Resolver for type not implemented'
    }
  };

// TODO: where is ctx?
export const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
      const { type, id } = fromGlobalId(globalId);
      return typesReducer(type)(id);
    },
    (obj) => {
        console.log(obj.constructor.name);
        return tripType;
    },
  );