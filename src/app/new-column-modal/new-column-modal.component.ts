import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-column-modal',
  templateUrl: './new-column-modal.component.html',
  styleUrls: ['./new-column-modal.component.scss']
})
export class NewColumnModalComponent {

  newColumnName = '';
  colors = ['green', 'blue', 'red'];
  chosenColor =  'blue';

  constructor(
    public dialogRef: MatDialogRef<NewColumnModalComponent>,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
