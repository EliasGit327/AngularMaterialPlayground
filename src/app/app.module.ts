import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './shared/material.module';
import { UniversalTableComponent } from './components/universal-table/universal-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCheckboxModule, MatRadioModule} from '@angular/material';
import { TablePreviewComponent } from './pages/table-preview/table-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalTableComponent,
    TablePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    CdkTableModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
