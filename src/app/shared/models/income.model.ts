export class Income {
  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public categoryId: string
  ) {}
}
