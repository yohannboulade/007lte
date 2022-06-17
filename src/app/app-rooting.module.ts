import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { GoldenBookComponent } from "./golden-book/golden-book.component";
import { HomeComponent } from "./home/home.component";
import { MediaComponent } from "./media/media.component";
import { PressComponent } from "./press/press.component";
import { ShopComponent } from "./shop/shop.component";
import { StoryComponent } from "./story/story.component";

const routes: Routes =[
    {path: 'golden-book', component: GoldenBookComponent},
    {path: 'press', component: PressComponent},
    {path: 'media', component: MediaComponent},
    {path: 'story', component: StoryComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'events', component: EventsComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}