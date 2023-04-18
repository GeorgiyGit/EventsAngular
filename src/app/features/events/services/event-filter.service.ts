import { Injectable } from '@angular/core';
import { ISimpleEvent } from '../models/simple-event';
import { IPlaceFilter } from '../../places/models/place-filter';

@Injectable({
  providedIn: 'root'
})
export class EventFilterService {

  constructor() { }
  getFilteredEvents(events: ISimpleEvent[], filter: IPlaceFilter): ISimpleEvent[] {
    let tempEvents = [];
    if (filter.filterStr == '') tempEvents = events;
    else tempEvents = events.filter(x => x.title.toUpperCase().includes(filter.filterStr.toUpperCase()));

    if (filter.genres!=null && filter.genres.length > 0) {
      let temp: ISimpleEvent[] = [];
      tempEvents.forEach(elem => {

        let flag = true;
        if (elem.types.length == 0) flag = false;
        filter.genres.forEach(t => {
          if (elem.types.filter(t2 => t2.id == t.id).length == 0) {
            flag = false;
          }
        })

        if (flag) temp.push(elem);
      });
      tempEvents = temp;
    }

    if(filter.orderType==0){
      tempEvents = tempEvents.sort(a => a.fullRating);
    }
    else if(filter.orderType==1){
      tempEvents = tempEvents.sort(a => a.fullRating).reverse();
    }
    else if(filter.orderType==2){
      tempEvents = tempEvents.sort(a => a.eventTime.getMinutes());
    }
    else if(filter.orderType==3){
      tempEvents = tempEvents.sort((a, b) => a.title.localeCompare(b.title)).reverse();
    }
    else if(filter.orderType==4){
      tempEvents = tempEvents.sort((a, b) => a.title.localeCompare(b.title));
    }

    return tempEvents;
  }
}
