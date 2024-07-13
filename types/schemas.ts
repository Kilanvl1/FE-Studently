import { components } from "./schema.generated";

type schemas = components["schemas"];

// Request data types for the API
export type ProfileCreateRequest = schemas["ProfileRequest"];
