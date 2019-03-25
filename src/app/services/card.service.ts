import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: AngularFirestore) { }

  getCards() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  createCard(card: Card) {
    return this.firestore.collection('cards').doc('test').collection('cards').add(card);
  }

  updateCard(card: Card) {
    delete card.id;
    card.lastUpdated = Date.now();
    return this.firestore.doc(`cards/${card.id}`).update(card);
  }

  deleteCard(cardId: string) {
    return this.firestore.doc(`cards/${cardId}`).delete();
  }
}
