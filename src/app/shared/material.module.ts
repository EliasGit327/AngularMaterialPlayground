import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule, MatNativeDateModule,
  MatSidenav, MatSidenavContainer, MatSidenavContent, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { AdaptiveTableComponent } from './adaptive-table/adaptive-table.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    AdaptiveTableComponent,
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatTableModule,
    AdaptiveTableComponent,
  ]
})
export class MaterialModule { }
