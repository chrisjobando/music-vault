export function getUserInitials(firstName?: string, lastName?: string | null) {
  if (!firstName) return '';
  if (!lastName || lastName === null) return firstName[0];
  if (firstName.length === 0 && lastName.length === 0) return 'MV';
  return `${firstName[0]}${lastName[0]}`;
}
