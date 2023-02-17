import { FavoriteService } from './../../services/favorite.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-favorite-button',
  templateUrl: './place-favorite-button.component.html',
  styleUrls: ['./place-favorite-button.component.scss']
})
export class PlaceFavoriteButtonComponent implements  OnInit {
  @Input() placeId: number;

  isPlaceFavorite:boolean;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.isFavoritePlace(this.placeId).subscribe(result =>{
      this.isPlaceFavorite=result;
    })
  }


  onClick(){
    if(this.isPlaceFavorite){
      this.favoriteService.removeFavoritePlace(this.placeId).subscribe(result=>{
        this.isPlaceFavorite=false;
      });
    }
    else{
      this.favoriteService.addFavoritePlace(this.placeId).subscribe(result=>{
        this.isPlaceFavorite=true;
      });
    }
  }



}
