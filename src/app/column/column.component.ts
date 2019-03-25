import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnService } from '../services/column.service';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() boardId: string;
  @Output() numColsEvent = new EventEmitter<number>();

  columns: Column[];

  constructor(private columnService: ColumnService) {
  }

  ngOnInit() {

  }

}
