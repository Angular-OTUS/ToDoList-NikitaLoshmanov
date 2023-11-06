export enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE'
}

export const StatusMap: {[status in Status]: string} = {
  [Status.TODO]: "TODO",
  [Status.IN_PROGRESS]: "IN PROGRESS",
  [Status.DONE]: "DONE",
}
