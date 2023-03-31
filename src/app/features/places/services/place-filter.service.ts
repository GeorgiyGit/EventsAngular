import { ISimplePlace } from './../models/simple-place';
import { Injectable } from '@angular/core';
import { IPlaceFilter, OrderType } from '../models/place-filter';

@Injectable({
  providedIn: 'root'
})
export class PlaceFilterService {

  constructor() { }

  getFilteredPlaces(places: ISimplePlace[], filter: IPlaceFilter): ISimplePlace[] {

    let tempPlaces = [];
    if (filter.filterStr == '') tempPlaces = places;
    else tempPlaces = places.filter(x => x.name.toUpperCase().includes(filter.filterStr.toUpperCase()));

    if (filter.genres!=null && filter.genres.length > 0) {
      let temp: ISimplePlace[] = [];
      tempPlaces.forEach(elem => {

        let flag = true;
        if (elem.types.length == 0) flag = false;
        filter.genres.forEach(t => {
          if (elem.types.filter(t2 => t2.id == t.id).length == 0) {
            flag = false;
          }
        })

        if (flag) temp.push(elem);
      });
      tempPlaces = temp;
    }

    if(filter.orderType==0){
      tempPlaces = tempPlaces.sort(a => a.fullRating);
    }
    else if(filter.orderType==1){
      tempPlaces = tempPlaces.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
    else if(filter.orderType==2){
      tempPlaces = tempPlaces.sort((a, b) => a.name.localeCompare(b.name));
    }

    return tempPlaces;
  }
}
