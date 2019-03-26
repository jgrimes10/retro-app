import { Card } from './card.model';

export class Column {
  id: string;
  name: string;
  cards: Card[];
  color: string;
  createdDate: number = Date.now();
  updatedDate: number = Date.now();
}
