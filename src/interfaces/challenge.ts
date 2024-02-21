export default interface Challenge {
  id?: number;
  name: string;
  description: string;
  goal: number;
  maxPerDay: number;
  startDate: Date | string;
  finishDate: Date | string;
}
