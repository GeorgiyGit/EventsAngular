import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISimplePlace } from '../../models/simple-place';
import { PlacesService } from '../../services/places.service';

@Component({
  templateUrl: './customer-places.component.html',
  styleUrls: ['./customer-places.component.scss']
})
export class CustomerPlacesComponent {
  places: ISimplePlace[] = [];
  filteredPlaces: ISimplePlace[] = [];
  filter: string = '';
  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesService.getSimplePlaces().subscribe(result => {
      this.places = result;
      this.filteredPlaces = this.places;
    });
  }

  filtered(places: ISimplePlace[]) {
    this.filteredPlaces = places;
  }
}
