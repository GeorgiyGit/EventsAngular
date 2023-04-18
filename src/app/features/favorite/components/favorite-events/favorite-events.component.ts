import { FavoriteService } from 'src/app/features/favorite/services/favorite.service';
import { Component, OnInit } from '@angular/core';
import { IFavoriteEvent } from 'src/app/features/events/models/favorite-event';
@Component({
  selector: 'app-favorite-events',
  templateUrl: './favorite-events.component.html',
  styleUrls: ['./favorite-events.component.scss']
})
export class FavoriteEventsComponent implements OnInit{
  events:IFavoriteEvent[]=[];

  constructor(private favoriteService:FavoriteService){}
  
  ngOnInit(): void {
    this.favoriteService.getFavoriteEvents().subscribe(res=>{
      this.events=res;
      console.log(res);
    })
  }

  removeEvent(id:number){
    this.favoriteService.removeFavoriteEvent(id).subscribe(res=>{
      this.events=this.events.filter(e=>e.id!=id);
    })
  }
}
