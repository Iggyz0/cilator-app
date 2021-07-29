import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransliterateComponent } from './transliterate/transliterate.component';

const routes: Routes = [
  { path: '', redirectTo: '/transliterate', pathMatch: 'full' },
  { path: 'transliterate', component: TransliterateComponent },
  { path: '**', component: TransliterateComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }