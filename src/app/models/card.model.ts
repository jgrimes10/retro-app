export class Card {
  id: string;
  cardText: string;
  creationDate = Date.now();
  lastUpdated = Date.now();
  upVotes: number;
  downVotes: number;
  owner: string;
}
