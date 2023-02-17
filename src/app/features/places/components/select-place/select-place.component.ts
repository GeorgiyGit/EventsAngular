import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISimplePlace } from '../../models/simple-place';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.component.html',
  styleUrls: ['./select-place.component.scss']
})
export class SelectPlaceComponent implements OnInit{

  places: ISimplePlace[];

  selectedPlace: ISimplePlace;

  @Output() selectePlaceEvent = new EventEmitter<ISimplePlace>();
  @Input() placeholder:string;

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesService.getSimplePlaces().subscribe(result => {
      this.places = result;
    });
  }

  select(e: any): void {
    let place = this.places.find(x => x?.name === e.target.value);
    if (place != null) {
      this.selectePlaceEvent.emit(place);
    }
  }
}

