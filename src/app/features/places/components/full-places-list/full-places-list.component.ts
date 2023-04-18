import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';
import { IPlace } from '../../models/place';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-places-list',
  templateUrl: './full-places-list.component.html',
  styleUrls: ['./full-places-list.component.scss']
})
export class FullPlacesListComponent {

  places: IPlace[];

  constructor(private placesService: PlacesService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.placesService.getfullPlaces().subscribe(res => {
      this.places = res;
    }, error => {
      console.warn(error);
    });
  }

  addPlace(): void {
    this.router.navigateByUrl("/places/add");
  }

  editPlace(id: number): void {
    this.router.navigateByUrl("/places/add/" + id);
  }
  deletePlace(id: number): void {
    this.placesService.deletePlace(id).subscribe(res => {
      var place = this.places.find(e => e.id == id);
      if (place != null) place.isDeleted = true;
    }, error => {
      console.log(error);
    })
  }
}
