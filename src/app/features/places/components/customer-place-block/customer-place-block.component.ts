import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFavoritePlace } from '../../models/favorite-place';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-place-block',
  templateUrl: './customer-place-block.component.html',
  styleUrls: ['./customer-place-block.component.scss']
})
export class CustomerPlaceBlockComponent implements OnInit {
  @Input() place: IFavoritePlace;
  @Output() removeEvent = new EventEmitter<number>();

  url: SafeStyle;

  filesServerUrl: string = '';
  constructor(private router: Router,
    private sanitizer: DomSanitizer) {
    this.filesServerUrl = environment.filesUrl;
  }

  ngOnInit(): void {
    if (this.place.image != null) {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.place.image.fullName}')`);
    }
    else {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('https://static-cse.canva.com/blob/847064/29.jpg')`);
    }
  }

  click() {
    this.router.navigateByUrl("places/details/" + this.place.id);
  }
  remove() {
    this.removeEvent.emit(this.place.id);
  }
}
