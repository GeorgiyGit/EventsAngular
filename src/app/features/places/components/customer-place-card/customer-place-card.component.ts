import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPlace } from '../../models/place';
import { ISimplePlace } from '../../models/simple-place';

@Component({
  selector: 'app-customer-place-card',
  templateUrl: './customer-place-card.component.html',
  styleUrls: ['./customer-place-card.component.scss']
})
export class CustomerPlaceCardComponent {
   @Input() place: ISimplePlace;

  constructor(private router:Router) { }

  click(id:number){
    this.router.navigateByUrl("/places/place/"+id);
  }
}
