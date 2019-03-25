import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor(private firestore: AngularFirestore) { }

  getColumns(boardId: string) {
    return this.firestore.doc(`boards/${boardId}`).collection('columns').snapshotChanges();
  }

  createColumn(boardId: string, column: Column) {
    return this.firestore.doc(`boards/${boardId}`).collection('columns').add(column);
  }

  deleteColumn(boardId: string, columnId: string) {
    return this.firestore.doc(`boards/${boardId}/columns/${columnId}`).delete();
  }
}
