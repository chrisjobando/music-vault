import type { IRecords } from '$lib/types';

export type IRecordSortableFields = 'created_at' | 'title' | 'artist' | 'year' | 'genre';

export function sortRecordsByField(records: IRecords[], field: IRecordSortableFields) {
  return records.sort((a, b) => {
    const recordA = a[field];
    const recordB = b[field];

    // If null, put at the end
    if (recordA === null || recordA === '') return 1;
    if (recordB === null || recordB === '') return -1;

    if (recordA > recordB) return 1;
    if (recordA < recordB) return -1;
    return 0;
  });
}
