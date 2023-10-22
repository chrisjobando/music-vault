import type { IUserProfile } from '$lib/types';
import { writable } from 'svelte/store';

const ProfileStore = writable<IUserProfile | null>(null);

export default ProfileStore;
