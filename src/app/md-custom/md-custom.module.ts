import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class CustomMaterialDesignModule { }
