/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/profile/{id}/increment-page-visits/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["profile_increment_page_visits_update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["profile_increment_page_visits_partial_update"];
        trace?: never;
    };
    "/profiles/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["profiles_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profiles/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["profiles_retrieve"];
        put: operations["profiles_update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["profiles_partial_update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        PatchedProfileRequest: {
            name?: string;
            /** Format: email */
            email?: string | null;
            phone_number?: string | null;
            /** Format: uri */
            session_replay_url?: string | null;
            has_booked_appointment?: boolean;
            /** Format: int64 */
            number_of_landingpage_visits?: number;
            /** Format: int64 */
            age?: number | null;
            is_student?: boolean | null;
            is_dutch?: boolean | null;
            is_EU?: boolean | null;
            is_eligible?: boolean | null;
            is_insured?: boolean | null;
            has_insurance_benefit?: boolean | null;
            is_working?: boolean | null;
            is_living_at_home?: boolean | null;
        };
        Profile: {
            readonly id: number;
            name: string;
            /** Format: email */
            email?: string | null;
            phone_number?: string | null;
            /** Format: uri */
            session_replay_url?: string | null;
            has_booked_appointment?: boolean;
            /** Format: int64 */
            number_of_landingpage_visits?: number;
            /** Format: int64 */
            age?: number | null;
            is_student?: boolean | null;
            is_dutch?: boolean | null;
            is_EU?: boolean | null;
            is_eligible?: boolean | null;
            is_insured?: boolean | null;
            has_insurance_benefit?: boolean | null;
            is_working?: boolean | null;
            is_living_at_home?: boolean | null;
        };
        ProfileRequest: {
            name: string;
            /** Format: email */
            email?: string | null;
            phone_number?: string | null;
            /** Format: uri */
            session_replay_url?: string | null;
            has_booked_appointment?: boolean;
            /** Format: int64 */
            number_of_landingpage_visits?: number;
            /** Format: int64 */
            age?: number | null;
            is_student?: boolean | null;
            is_dutch?: boolean | null;
            is_EU?: boolean | null;
            is_eligible?: boolean | null;
            is_insured?: boolean | null;
            has_insurance_benefit?: boolean | null;
            is_working?: boolean | null;
            is_living_at_home?: boolean | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    profile_increment_page_visits_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProfileRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["ProfileRequest"];
                "multipart/form-data": components["schemas"]["ProfileRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
    profile_increment_page_visits_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PatchedProfileRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["PatchedProfileRequest"];
                "multipart/form-data": components["schemas"]["PatchedProfileRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
    profiles_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProfileRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["ProfileRequest"];
                "multipart/form-data": components["schemas"]["ProfileRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
    profiles_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this Profile. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
    profiles_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this Profile. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProfileRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["ProfileRequest"];
                "multipart/form-data": components["schemas"]["ProfileRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
    profiles_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this Profile. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PatchedProfileRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["PatchedProfileRequest"];
                "multipart/form-data": components["schemas"]["PatchedProfileRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Profile"];
                };
            };
        };
    };
}
