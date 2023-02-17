import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGenre } from 'src/app/features/genres/models/genre';
import { ISimpleEvent } from '../../models/simple-event';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss']
})
export class EventsFilterComponent {
  sortedValue: number = 0;


  selectedGenres: IGenre[] = [];
  placeholder = "Add Type";
  @Input() events: ISimpleEvent[];
  @Output() filteredEventsEvent = new EventEmitter<ISimpleEvent[]>();


  types: IGenre[] = [];

  filter: string = '';
  filterChange($event: any): void {
    this.filter = $event.target.value;
    this.filtering();
  }

  select($event: any): void {
    this.sortedValue = $event.target.value;
    this.filtering();
  }
  filtering() {
    let tempEvents = [];
    if (this.filter == '') tempEvents = this.events;
    else tempEvents = this.events.filter(x => x.title.toUpperCase().includes(this.filter.toUpperCase()));

    if (this.types.length > 0) {
      let temp: ISimpleEvent[] = [];
      tempEvents.forEach(elem => {

        let flag = true;
        if (elem.types.length == 0) flag = false;
        this.types.forEach(t => {
          if (elem.types.filter(t2 => t2.id == t.id).length == 0) {
            flag = false;
          }
        })

        if (flag) temp.push(elem);
      });
      tempEvents = temp;
    }


    switch (+this.sortedValue) {
      case 0: {
        tempEvents = tempEvents.sort(a => a.fullRating);
        break;
      }

      case 1: {
        tempEvents = tempEvents.sort(a => a.fullRating).reverse();
        break;
      }

      case 2: {
        tempEvents = tempEvents.sort((a,b) => new Date(a.eventTime).getTime()-new Date(b.eventTime).getTime());
        break;
      }

      case 3: {
        tempEvents = tempEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
      }

      default: {
        tempEvents = tempEvents.sort((a, b) => a.title.localeCompare(b.title)).reverse();
        break;
      }
    }

    this.filteredEventsEvent.emit(tempEvents);
  }


  addGenre(genres: IGenre[]) {
    this.types = genres;
    this.filtering();
  }
}