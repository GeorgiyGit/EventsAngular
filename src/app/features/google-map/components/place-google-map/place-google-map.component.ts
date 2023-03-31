import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-place-google-map',
  templateUrl: './place-google-map.component.html',
  styleUrls: ['./place-google-map.component.scss']
})
export class PlaceGoogleMapComponent implements AfterViewInit{
  @ViewChild('mapContainer') mapContainer: any;
  map!: google.maps.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }
}