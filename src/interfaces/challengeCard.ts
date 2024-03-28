import type Challenge from './challenge';

export default interface ChallengeCard extends Challenge {
  ranking: number;
  participants: number;
  activities: number;
}
