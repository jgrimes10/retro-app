import { Column } from './column.model';

export class Board {
  id: string;
  name: string;
  columns: Column[];
  createdDate: number = Date.now();
  updatedDate: number = Date.now();
}
