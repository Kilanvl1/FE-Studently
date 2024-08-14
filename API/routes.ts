export const incrementPageVisitsRoute = (profileId: string) =>
  `profile/${profileId}/increment-page-visits`;

export const createProfileRoute = () => `profiles/`;

export const updateProfileRoute = (profileId: string) =>
  `profiles/${profileId}/`;

export const getProfileRoute = (profileId: string) => `profiles/${profileId}/`;
