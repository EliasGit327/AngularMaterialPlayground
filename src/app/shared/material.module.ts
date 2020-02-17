import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenav, MatSidenavContainer, MatSidenavContent, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatTableModule
  ]
})
export class MaterialModule { }
