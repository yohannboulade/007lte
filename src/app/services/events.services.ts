import {Injectable} from '@angular/core';
import {Event} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})

export class EventsServices {
  events: Event[] = [
    {
      id: 1,
      date: new Date(2020, 2, 14),
      location: 'Le Barfly',
      city: 'Montréal',
      type: 'Tournée au CANADA'
    },
    {
      id: 2,
      date: new Date(2020, 2, 15),
      location: 'Taverne royale',
      city: 'Trois Rivières (Canada)',
      type: 'Tournée au CANADA'
    },
    {
      id: 3,
      date: new Date(2020, 2, 16),
      location: 'The weel club',
      city: 'Montréal',
      type: 'Tournée au CANADA'
    },
    {
      id: 4,
      date: new Date(2020, 2, 18),
      location: 'Le bal du lezard',
      city: 'Quebec',
      type: 'Tournée au CANADA'
    },
    {
      id: 5,
      date: new Date(2020, 2, 19),
      location: 'Les yeux bleus',
      city: 'Quebec',
      type: 'Tournée au CANADA'
    }
  ];

  getAllEvent(): Event[] {
    return this.events;
  }
}
