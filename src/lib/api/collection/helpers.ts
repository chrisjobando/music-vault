import type { IRecords, IUpdateRecords } from '$lib/types';

export function findUpdatedRecordFields(
  userRecord: IUpdateRecords,
  originalRecord: IRecords
): IUpdateRecords {
  const updateRecord: IUpdateRecords = {};

  if (userRecord.title && userRecord.title !== originalRecord.title) {
    updateRecord.title = userRecord.title;
  }

  if (userRecord.artist && userRecord.artist !== originalRecord.artist) {
    updateRecord.artist = userRecord.artist;
  }

  if (userRecord.genre && userRecord.genre !== originalRecord.genre) {
    updateRecord.genre = userRecord.genre;
  }

  if (userRecord.year && userRecord.year !== originalRecord.year) {
    updateRecord.year = userRecord.year;
  }

  return updateRecord;
}

export enum RecordUpdateType {
  CREATE,
  UPDATE,
  DELETE
}

export function updateRecordCollection(
  recordList: IRecords[],
  updatedRecord: IRecords,
  updateType: RecordUpdateType
): IRecords[] {
  switch (updateType) {
    case RecordUpdateType.CREATE:
      return [...recordList, updatedRecord];
    case RecordUpdateType.UPDATE:
      return recordList.map((record) => {
        if (record.id === updatedRecord.id) {
          return updatedRecord;
        }
        return record;
      });
    case RecordUpdateType.DELETE:
      return recordList.filter((record) => record.id !== updatedRecord.id);
    default:
      return recordList;
  }
}
