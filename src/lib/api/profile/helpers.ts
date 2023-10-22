import type { IProfiles, IUpdateProfiles } from '$lib/types';

export function findUpdatedProfileFields(
  userProfile: IUpdateProfiles,
  originalProfile: IProfiles
): IUpdateProfiles {
  const updateProfile: IUpdateProfiles = {};

  if (userProfile.display_name && userProfile.display_name !== originalProfile.display_name) {
    updateProfile.display_name = userProfile.display_name;
  }

  if (userProfile.first_name && userProfile.first_name !== originalProfile.first_name) {
    updateProfile.first_name = userProfile.first_name;
  }

  if (userProfile.last_name && userProfile.last_name !== originalProfile.last_name) {
    updateProfile.last_name = userProfile.last_name;
  }

  if (userProfile.avatar_url && userProfile.avatar_url !== originalProfile.avatar_url) {
    updateProfile.avatar_url = userProfile.avatar_url;
  }

  return updateProfile;
}
