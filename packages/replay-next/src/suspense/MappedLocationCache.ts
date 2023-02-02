import {
  Location as ProtocolLocation,
  MappedLocation as ProtocolMappedLocation,
} from "@replayio/protocol";

import { ReplayClientInterface } from "shared/client/types";

import { createGenericCache } from "./createGenericCache";

export const {
  getValueSuspense: getMappedLocationSuspense,
  getValueAsync: getMappedLocationAsync,
  getValueIfCached: getMappedLocationIfCached,
} = createGenericCache<
  [replayClient: ReplayClientInterface],
  [location: ProtocolLocation],
  ProtocolMappedLocation
>(
  "MappedLocationCache: getMappedLocation",
  1,
  (client, location) => client.getMappedLocation(location),
  location => `${location.sourceId}:${location.line}:${location.column}`
);