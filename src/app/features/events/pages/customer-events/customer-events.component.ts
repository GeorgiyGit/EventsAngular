import { ISimpleEvent } from './../../models/simple-event';
import { EventsService } from './../../services/events.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './customer-events.component.html',
  styleUrls: ['./customer-events.component.scss']
})
export class CustomerEventsComponent {
  events: ISimpleEvent[] = [];
  filteredEvents: ISimpleEvent[] = [];
  filter: string = '';
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getSimpleEvents().subscribe(result => {
      this.events = result;
      this.filteredEvents = this.events;
    });
  }

  filtered(events: ISimpleEvent[]) {
    this.filteredEvents = events;
  }
}
