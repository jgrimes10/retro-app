import { Card } from './card.model';

export class Column {
  id: string;
  name: string;
  cards: Card[];
  createdDate: number = Date.now();
  updatedDate: number = Date.now();
}
