import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISimpleEvent } from '../../models/simple-event';

@Component({
  selector: 'app-customer-event-card',
  templateUrl: './customer-event-card.component.html',
  styleUrls: ['./customer-event-card.component.scss']
})
export class CustomerEventCardComponent {
  @Input() event: ISimpleEvent;

  constructor(private router:Router) { }

  click(id:number){
    this.router.navigateByUrl("/event-details/"+id);
  }
}
