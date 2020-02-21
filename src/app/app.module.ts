import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './shared/material.module';
import { UniversalTableComponent } from './components/universal-table/universal-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { TablePreviewComponent } from './pages/table-preview/table-preview.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { UniversalInputsComponent } from './components/universal-inputs/universal-inputs.component';
import {FormsModule} from '@angular/forms';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalTableComponent,
    TablePreviewComponent,
    UniversalInputsComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    CdkTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
