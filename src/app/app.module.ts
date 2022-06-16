import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaporamaComponent } from './diaporama/diaporama.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaporamaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
