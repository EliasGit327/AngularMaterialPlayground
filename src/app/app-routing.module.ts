import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TablePreviewComponent} from './pages/table-preview/table-preview.component';
import {AdvancedSearchPreviewComponent} from './pages/advanced-search-preview/advanced-search-preview.component';

const routes: Routes = [
  { path: 'table', component: TablePreviewComponent },
  { path: 'advanced-search', component: AdvancedSearchPreviewComponent },
  { path: '',
    redirectTo: '/advanced-search',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/advanced-search', }

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})

export class AppRoutingModule { }
