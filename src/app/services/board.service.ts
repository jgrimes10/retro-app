import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private firestore: AngularFirestore) { }

  getBoards() {
    return this.firestore.collection('boards').snapshotChanges();
  }

  createBoard(board: Board) {
    return this.firestore.collection('boards').add(board);
  }

  // updateBoard

  deleteBoard(id: string) {
    return this.firestore.doc(`boards/${id}`).delete();
  }
}
