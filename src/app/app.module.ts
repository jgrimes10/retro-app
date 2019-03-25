import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardService } from './services/card.service';
import { ColumnService } from './services/column.service';
import { BoardService } from './services/board.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import { BoardComponent } from './board/board.component';
import { NewColumnModalComponent } from './new-column-modal/new-column-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColumnComponent,
    BoardComponent,
    NewColumnModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    CardService,
    BoardService,
    ColumnService,
    AngularFirestore
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewColumnModalComponent,
    ConfirmModalComponent
  ]
})
export class AppModule { }
