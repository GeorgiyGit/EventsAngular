import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-event-favorite-button',
  templateUrl: './event-favorite-button.component.html',
  styleUrls: ['./event-favorite-button.component.scss']
})
export class EventFavoriteButtonComponent implements OnInit{
  @Input() eventId: number;

  isEventFavorite:boolean;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.isFavoriteEvent(this.eventId).subscribe(result =>{
      this.isEventFavorite=result;
    })
  }


  onClick(){
    if(this.isEventFavorite){
      this.favoriteService.removeFavoriteEvent(this.eventId).subscribe(result=>{
        this.isEventFavorite=false;
      });
    }
    else{
      this.favoriteService.addFavoriteEvent(this.eventId).subscribe(result=>{
        this.isEventFavorite=true;
      });
    }
  }
}
