import type RankingUser from './rankingUser';

export default interface RankingItem {
  id: number;
  completed: number;
  remaining: number;
  position: number;
  updatedAt: Date | string;
  user: RankingUser;
}
