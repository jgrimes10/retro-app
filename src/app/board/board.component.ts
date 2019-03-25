import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BoardService } from '../services/board.service';
import { ColumnService } from '../services/column.service';
import {Column} from '../models/column.model';
import {NewColumnModalComponent} from '../new-column-modal/new-column-modal.component';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boardId = '123abc';
  columns: Column[];
  numCols: number;

  constructor(
    private boardService: BoardService,
    private columnService: ColumnService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // get all of the columns
    this.columnService.getColumns(this.boardId).subscribe(data => {
      this.columns = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Column;
      });

      // get the number of columns
      this.numCols = this.columns.length;
    });
  }

  // delete column by id
  deleteColumn(id: string) {
    this.columnService.deleteColumn(this.boardId, id);
  }

  // add a new column
  addColumn(column: Column) {
    this.columnService.createColumn(this.boardId, JSON.parse(JSON.stringify(column)));
  }

  // open the modal to add a new column
  openDialog(): void {
    const dialogRef = this.dialog.open(NewColumnModalComponent, {
      width: '250px',
      data: {name: this.colName}
    });

    // after the user closes the modal
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      // create a new column object
      const colToAdd = new Column();
      // set the column name from the value entered into the modal
      colToAdd.name = result;
      // add the column to db
      this.addColumn(colToAdd);
    });
  }

  openConfirmDialog(column: Column): void {
    // set up the modal
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: {columnName: column.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      // if no result data or user clicked no
      if (!result || result === false) {
        return;
      }

      // delete the column from the db
      this.deleteColumn(column.id);
    });
  }
}
