import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/features/account/services/account.service';
import { FavoriteService } from 'src/app/features/favorite/services/favorite.service';
import { PlacesService } from 'src/app/features/places/services/places.service';
import { IEvent } from '../../models/event';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-customer-event-details',
  templateUrl: './customer-event-details.component.html',
  styleUrls: ['./customer-event-details.component.scss']
})
export class CustomerEventDetailsComponent implements OnInit{
  event:IEvent;
  isFavorite:boolean;
  constructor(private route:ActivatedRoute,
              private eventsService:EventsService,
              public accountService:AccountService,
              private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

      this.eventsService.getById(parseInt(id))
        .subscribe(res => {
          this.event=res;
        });

    if(this.accountService.isAuthenticated()){
      this.favoriteService.isFavoritePlace(parseInt(id)).subscribe(res=>{
        this.isFavorite=res;
      });
    }
  }


  removeFavorite()
  {
    this.favoriteService.removeFavoritePlace(this.event.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }

  addFavorite()
  {
    this.favoriteService.addFavoritePlace(this.event.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }
}
