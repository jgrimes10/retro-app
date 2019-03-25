import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
