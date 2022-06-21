import {Injectable} from '@angular/core';
import {Slide} from '../models/slide.model';

@Injectable({
  providedIn: 'root'
})

export class SliderServices {
  slider: Slide[] = [
    {
      id: 1,
      title: 'Archibald',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    },
    {
      id: 3,
      title: 'Un bo n repas',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    }
  ];

  getSlider(): Slide[] {
    return this.slider;
  }
}
