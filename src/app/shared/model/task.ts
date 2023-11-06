export class Task {
  constructor(
    public id: number,
    public text: string | undefined | null,
    public description: string | undefined | null,
    public status: string | undefined | null) {}

}
