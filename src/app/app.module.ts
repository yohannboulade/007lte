import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaporamaComponent } from './diaporama/diaporama.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ShopComponent } from './shop/shop.component';
import { StoryComponent } from './story/story.component';
import { MediaComponent } from './media/media.component';
import { GoldenBookComponent } from './golden-book/golden-book.component';
import { PressComponent } from './press/press.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaporamaComponent,
    HomeComponent,
    EventComponent,
    ShopComponent,
    StoryComponent,
    MediaComponent,
    GoldenBookComponent,
    PressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
