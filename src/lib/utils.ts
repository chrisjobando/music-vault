import type { IUserProfile } from './types';

export function getUserFullName(
  userProfile: Pick<IUserProfile, 'first_name' | 'last_name'>
): string {
  return `${userProfile.first_name} ${userProfile.last_name ?? ''}`.trim();
}
