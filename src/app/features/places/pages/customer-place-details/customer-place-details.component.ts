import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/features/account/services/account.service';
import { FavoriteService } from 'src/app/features/favorite/services/favorite.service';
import { IPlace } from '../../models/place';
import { PlacesService } from '../../services/places.service';

@Component({
  templateUrl: './customer-place-details.component.html',
  styleUrls: ['./customer-place-details.component.scss']
})
export class CustomerPlaceDetailsComponent {
  place:IPlace;
  isFavorite:boolean;
  constructor(private route:ActivatedRoute,
              private placesService:PlacesService,
              public accountService:AccountService,
              private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

      this.placesService.getById(parseInt(id))
        .subscribe(res => {
          this.place=res;
          console.log(res.id);
        });

    if(this.accountService.isAuthenticated()){
      this.favoriteService.isFavoritePlace(parseInt(id)).subscribe(res=>{
        this.isFavorite=res;
      });
    }
  }


  removeFavorite()
  {
    this.favoriteService.removeFavoritePlace(this.place.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }

  addFavorite()
  {
    this.favoriteService.addFavoritePlace(this.place.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }
}
