import { EventsService } from './../../services/events.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../../models/event';

@Component({
  selector: 'app-full-events-list',
  templateUrl: './full-events-list.component.html',
  styleUrls: ['./full-events-list.component.scss']
})
export class FullEventsListComponent {
  events: IEvent[];

  constructor(private eventsService: EventsService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.eventsService.getfullEvents().subscribe(res => {
      this.events = res;
    }, error => {
      console.warn(error);
    });
  }

  addEvent(): void {
    this.router.navigateByUrl("/events/add");
  }

  editEvent(id: number): void {
    this.router.navigateByUrl("/events/add/" + id);
  }
  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe(res => {
      this.events.splice(this.events.findIndex(e => e.id == id), 1);
    }, error => {
      console.log(error);
    })
  }
}
