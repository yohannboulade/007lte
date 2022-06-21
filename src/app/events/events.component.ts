import {Component, OnInit} from '@angular/core';
import {Event} from "../models/event.model";
import {EventsServices} from "../services/events.services";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events!: Event[];

  constructor(private eventServices: EventsServices) {
  }

  ngOnInit(): void {
    this.events = this.eventServices.getAllEvent();
  }

}
