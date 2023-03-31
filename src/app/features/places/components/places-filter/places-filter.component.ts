import { IPlace } from './../../models/place';
import { IGenre } from './../../../genres/models/genre';
import { ISimpleEvent } from './../../../events/models/simple-event';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISimplePlace } from '../../models/simple-place';
import { endWith } from 'rxjs';
import { IPlaceFilter } from '../../models/place-filter';

@Component({
  selector: 'app-places-filter',
  templateUrl: './places-filter.component.html',
  styleUrls: ['./places-filter.component.scss']
})
export class PlacesFilterComponent {

  sortedValue:number=0;

  selectedGenres: IGenre[] = [];
  placeholder = "Add Type";

  @Input() places: ISimplePlace[];
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
