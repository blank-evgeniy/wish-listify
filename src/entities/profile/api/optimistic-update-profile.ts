import { queryClient } from "@/shared/api/query-client";
import { profileApi } from "./api";
import { ProfileDto } from "../model/type";

/**
 * Optimistically updates the profile in the query client cache, and returns an object containing the previous profile.
 *
 * @param newProfile - The new profile data to update the cache with.
 * @returns An object containing the previous profile.
 */
export async function optimisticUpdateProfile(
  newProfilePartial: Partial<ProfileDto>
) {
  await queryClient.cancelQueries({ queryKey: [profileApi.getQueryKey()] });

  const previousProfile = queryClient.getQueryData([
    profileApi.getQueryKey(),
  ]) as ProfileDto;

  const newProfile = { ...previousProfile, ...newProfilePartial };

  queryClient.setQueryData([profileApi.getQueryKey()], newProfile);

  return { previousProfile, newProfile };
}
