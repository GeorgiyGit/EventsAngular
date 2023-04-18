import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISimpleEvent } from '../../models/simple-event';
import { IFavoriteEvent } from '../../models/favorite-event';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-customer-event-block',
  templateUrl: './customer-event-block.component.html',
  styleUrls: ['./customer-event-block.component.scss']
})
export class CustomerEventBlockComponent implements OnInit {
  @Input() event: IFavoriteEvent;
  @Output() removeEvent = new EventEmitter<number>();

  url: SafeStyle;

  filesServerUrl: string = '';
  constructor(private router: Router,
    private sanitizer: DomSanitizer) {
    this.filesServerUrl = environment.filesUrl;
  }

  ngOnInit(): void {
    if (this.event.image != null) {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.event.image.path}')`);
    }
    else {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('https://static-cse.canva.com/blob/847064/29.jpg')`);
    }
  }

  click() {
    this.router.navigateByUrl("events/details/" + this.event.id);
  }
  remove() {
    this.removeEvent.emit(this.event.id);
  }
}
