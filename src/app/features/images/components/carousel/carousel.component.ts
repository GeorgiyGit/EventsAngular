import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IImage } from '../../models/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images:IImage[]=[];
  @Input() title:string='';

  imagesUrl:string='';
  constructor(){
    this.imagesUrl = environment.filesUrl+"1920_";
  }

  index = 0;
  prevSlide() {
    this.index = (this.index === 0) ? (this.images.length - 1) : (this.index - 1);
  }
  nextSlide() {
    this.index = (this.index === this.images.length - 1) ? 0 : (this.index + 1);
  }
}
