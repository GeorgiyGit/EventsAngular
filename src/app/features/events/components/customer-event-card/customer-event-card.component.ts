import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ISimpleEvent } from '../../models/simple-event';

@Component({
  selector: 'app-customer-event-card',
  templateUrl: './customer-event-card.component.html',
  styleUrls: ['./customer-event-card.component.scss']
})
export class CustomerEventCardComponent implements OnInit{
  @Input() event: ISimpleEvent;
  
  hover: boolean = false;

  url: SafeStyle;
  url2: SafeStyle;

  filesServerUrl: string = '';
  constructor(private router: Router,
    private sanitizer: DomSanitizer) {
    this.filesServerUrl = environment.filesUrl;
  }
  ngOnInit(): void {
    if (this.event.images.length >= 1) {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.event.images[0].fullName}')`);
    }
    else {
      this.url = this.sanitizer.bypassSecurityTrustStyle(`url('https://static-cse.canva.com/blob/847064/29.jpg')`);
    }
    if (this.event.images.length >= 2) {
      this.url2 = this.sanitizer.bypassSecurityTrustStyle(`url('${this.filesServerUrl}320_${this.event.images[1].fullName}')`);
      console.log(this.url2);
    }
  }

  click(id:number){
    this.router.navigateByUrl("events/details/"+id);
  }
}
