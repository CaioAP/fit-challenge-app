export default interface ChallengeCard {
  id: number;
  name: string;
  description: string;
  ranking: number;
  participants: number;
  activities: number;
  goal: number;
  startDate: Date;
  finishDate: Date;
}
