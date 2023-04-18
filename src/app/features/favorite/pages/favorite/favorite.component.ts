import { OverflowStateService } from './../../../../core/services/overflow-state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Router } from '@angular/router';
import { ISimpleEvent } from 'src/app/features/events/models/simple-event';
import { IFavoriteEvent } from 'src/app/features/events/models/favorite-event';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, OnDestroy{
  isOpenEvents:boolean;

  constructor(private router: Router,
              private overflowStateService:OverflowStateService) { }
  ngOnDestroy(): void {
    this.overflowStateService.unlockOverflow();
  }
  ngOnInit(): void {
    this.overflowStateService.lockOverflow();

    this.openEvents();
  }

  closeOverflow(): void {
    this.router.navigate([{outlets: {overflow: null}}]);
  }

  openEvents():void{
    this.isOpenEvents=true;
    this.router.navigate([{outlets: {overflow: 'favorite/events'}}]);
  }
  openPlaces():void{
    this.isOpenEvents=false;
    this.router.navigate([{outlets: {overflow: 'favorite/places'}}]);
  }
}