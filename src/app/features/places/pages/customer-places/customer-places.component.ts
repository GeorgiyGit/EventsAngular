import { PlaceFilterService } from './../../services/place-filter.service';
import { IPlaceFilter } from '../../models/place-filter';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISimplePlace } from '../../models/simple-place';
import { PlacesService } from '../../services/places.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  templateUrl: './customer-places.component.html',
  styleUrls: ['./customer-places.component.scss']
})
export class CustomerPlacesComponent {
  places: ISimplePlace[] = [];
  filteredPlaces: ISimplePlace[] = [];

  isLoaded:boolean=false;
  loadedElements:number[]=[1,2,3,4,5];


  filter: IPlaceFilter={
    genres:[],
    orderType:0,
    filterStr:''
  };

  isFilter:boolean;
  
  isPhone:boolean;

  constructor(private placesService: PlacesService,
              private placesfilterService:PlaceFilterService,
              private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.placesService.getSimplePlaces().subscribe(result => {
      this.places = result;
      this.filteredPlaces = this.places;
      
      this.isLoaded=true;
    });

    this.isPhone=false;

    /*this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetLandscape])
      .subscribe(result => {

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.XSmall] || breakpoints[Breakpoints.TabletLandscape] || breakpoints[Breakpoints.HandsetLandscape]) {
          this.isPhone=true;
        }
        else this.isPhone=false;

      });*/
  }

  filtered(places: ISimplePlace[]) {
    this.filteredPlaces = places;
  }


  showFilter():void{
    this.isFilter=true;
  }


  filtering():void{
    this.isFilter=false;    
    this.filteredPlaces=this.placesfilterService.getFilteredPlaces(this.places,this.filter);
  }

  filterChanged(filter:IPlaceFilter){
    this.filter.orderType=filter.orderType;
    this.filter.genres=filter.genres;
    this.filter.filterStr=filter.filterStr;
    
    this.filtering();
  }

  filterStrChanged($event: any): void {
    this.filter.filterStr = $event.target.value;
    this.filtering();
  }

  phantomClick(){}
}
