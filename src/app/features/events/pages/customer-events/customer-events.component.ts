import { IPlaceFilter } from 'src/app/features/places/models/place-filter';
import { EventFilterService } from '../../services/event-filter.service';
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

  isPhone:boolean=false;
  
  filter: IPlaceFilter={
    genres:[],
    orderType:0,
    filterStr:''
  };

  isFilter:boolean=false;
  
  constructor(private eventsService: EventsService,
              private filterService:EventFilterService) { }

  ngOnInit(): void {
    this.eventsService.getSimpleEvents().subscribe(result => {
      this.events = result;
      this.filteredEvents = this.events;
      console.log(this.events);
    });
  }

  filtered(places: ISimpleEvent[]) {
    this.filteredEvents = places;
  }


  showFilter():void{
    this.isFilter=true;
  }


  filtering():void{
    this.isFilter=false;    
    this.filteredEvents=this.filterService.getFilteredEvents(this.events,this.filter);
  }

  filterChanged(filter:IPlaceFilter){
    this.filter.orderType=filter.orderType;
    this.filter.genres=filter.genres;
    this.filter.filterStr=filter.filterStr;
    
    this.filtering();
  }

  filterStrChanged($event: any): void {
    this.filter.filterStr = $event.target.value;
    this.filtering();
  }
}
