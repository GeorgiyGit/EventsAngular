import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { IPlace } from '../../models/place';
import { ISimplePlace } from '../../models/simple-place';

@Component({
  selector: 'app-customer-place-card',
  templateUrl: './customer-place-card.component.html',
  styleUrls: ['./customer-place-card.component.scss']
})
export class CustomerPlaceCardComponent implements OnInit {
  @Input() place: ISimplePlace;

  hover: boolean = false;

  url: SafeStyle;
  url2: SafeStyle;

  filesServerUrl: string = '';
  constructor(private router: Router,
    private sanitizer: DomSanitizer) {
    this.filesServerUrl = environment.filesUrl;
  }

  ngOnInit(): void {
    if (this.place.images.length >= 1) {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.place.images[0].path}')`);
      console.log(this.url);
    }
    else {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('https://static-cse.canva.com/blob/847064/29.jpg')`);
    }
    if (this.place.images.length >= 2) {
      this.url2 = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.place.images[1].path}')`);
      console.log(this.url2);
    }
  }

  click(id: number) {
    this.router.navigateByUrl("/places/place/" + id);
  }
}
