import { IGenre } from './../../../genres/models/genre';
import { ISimpleEvent } from './../../../events/models/simple-event';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISimplePlace } from '../../models/simple-place';
import { endWith } from 'rxjs';

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
  @Output() filteredPlacesEvent = new EventEmitter<ISimplePlace[]>();


  types: IGenre[] = [];

  filter: string = '';
  filterChange($event: any): void {
    this.filter = $event.target.value;
    this.filtering();
  }

  select($event:any):void{
    this.sortedValue=$event.target.value;
    console.log(this.sortedValue);
    this.filtering();
  }
  filtering() {
    let tempPlaces = [];
    if (this.filter == '') tempPlaces = this.places;
    else tempPlaces = this.places.filter(x => x.name.toUpperCase().includes(this.filter.toUpperCase()));

    if (this.types.length > 0) {
      let temp: ISimplePlace[] = [];
      tempPlaces.forEach(elem => {

        let flag = true;
        if (elem.types.length == 0) flag = false;
        this.types.forEach(t => {
          if (elem.types.filter(t2 => t2.id == t.id).length == 0) {
            flag = false;
          }
        })

        if (flag) temp.push(elem);
      });
      tempPlaces = temp;
    }


    if(this.sortedValue==0){
      tempPlaces=tempPlaces.sort(a=>a.fullRating);
    }
    else if(this.sortedValue==1){
      tempPlaces=tempPlaces.sort(a=>a.fullRating).reverse();
    }
    else if(this.sortedValue==2){
      tempPlaces=tempPlaces.sort((a, b) => a.name.localeCompare(b.name));
      console.log(tempPlaces);
    }
    else{
      tempPlaces=tempPlaces.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }

    this.filteredPlacesEvent.emit(tempPlaces);
  }


  addGenre(genres: IGenre[]) {
    this.types = genres;
    this.filtering();
  }
}
