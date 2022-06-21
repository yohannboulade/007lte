import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-rooting.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DiaporamaComponent} from './diaporama/diaporama.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './event/event.component';
import {ShopComponent} from './shop/shop.component';
import {StoryComponent} from './story/story.component';
import {MediaComponent} from './media/media.component';
import {GoldenBookComponent} from './golden-book/golden-book.component';
import {PressComponent} from './press/press.component';
import {CarousselComponent} from './caroussel/caroussel.component';
import {SlideComponent} from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaporamaComponent,
    HomeComponent,
    EventsComponent,
    EventComponent,
    ShopComponent,
    StoryComponent,
    MediaComponent,
    GoldenBookComponent,
    PressComponent,
    CarousselComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
