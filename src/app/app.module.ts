import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TransliterateComponent } from './transliterate/transliterate.component';

import { TransliterateService } from './services/transliterate.service';
import { LocalstorageService } from './services/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    TransliterateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [TransliterateService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
