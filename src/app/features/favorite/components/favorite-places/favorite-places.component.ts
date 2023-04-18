import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { IFavoritePlace } from 'src/app/features/places/models/favorite-place';

@Component({
  selector: 'app-favorite-places',
  templateUrl: './favorite-places.component.html',
  styleUrls: ['./favorite-places.component.scss']
})
export class FavoritePlacesComponent implements OnInit{
  places:IFavoritePlace[]=[];

  constructor(private favoriteService:FavoriteService){}
  
  ngOnInit(): void {
    this.favoriteService.getFavoritePlaces().subscribe(res=>{
      this.places=res;
      console.log(res);
    })
  }

  removeEvent(id:number){
    this.favoriteService.removeFavoritePlace(id).subscribe(res=>{
      this.places=this.places.filter(e=>e.id!=id);
    })
  }
}
