import type Activity from './activity';
import type Challenge from './challenge';
import type Participant from './participant';
import type Ranking from './ranking';
import type RankingItem from './rankingItem';

export default interface ChallengeView extends Challenge {
  ranking: Ranking;
  rankingItem: RankingItem;
  participants: Participant[];
  activities: Activity[];
}
