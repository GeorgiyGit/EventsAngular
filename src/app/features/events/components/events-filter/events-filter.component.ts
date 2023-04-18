import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGenre } from 'src/app/features/genres/models/genre';
import { ISimpleEvent } from '../../models/simple-event';
import { EventFilterService } from '../../services/event-filter.service';
import { IPlaceFilter } from 'src/app/features/places/models/place-filter';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss']
})
export class EventsFilterComponent {
  selectedGenres: IGenre[] = [];
  placeholder = "Add Type";
  
  @Output() filterEvent = new EventEmitter<IPlaceFilter>();

  filter: IPlaceFilter={
    genres:[],
    orderType:0,
    filterStr:''
  };


  select($event:any):void{
    this.filter.orderType=$event.target.value;
    this.filtering();
  }

  filtering():void{
    this.filterEvent.emit(this.filter);
  }

  addGenre(genres: IGenre[]) {
    this.filter.genres=genres;
    this.filtering();
  }

  filterStrChanged($event:any):void{
    this.filter.filterStr=$event.target.value;
    this.filtering();
  }
}