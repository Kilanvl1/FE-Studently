import api from "./api";
import { getProfileRoute } from "./routes";
import { Profile } from "types/schemas";

export async function getProfile(id: string): Promise<Profile> {
  try {
    const response = (await api.get(getProfileRoute(id))) as Profile;
    return response;
  } catch (error) {
    console.log("Could not fetch profile...", error);
  }
}
