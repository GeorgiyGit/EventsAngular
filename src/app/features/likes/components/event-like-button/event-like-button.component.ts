import { Component, Input, OnInit } from '@angular/core';
import { LikesService } from '../../services/likes.service';

@Component({
  selector: 'app-event-like-button',
  templateUrl: './event-like-button.component.html',
  styleUrls: ['./event-like-button.component.scss']
})
export class EventLikeButtonComponent implements OnInit{
  @Input() id:number; 
  isLike:boolean;

  constructor(private likesService:LikesService) { }
  ngOnInit(): void {
    this.likesService.isEventLike(this.id).subscribe(res=>{
      this.isLike=res;
    })
  }
    
  addLike():void{
    this.likesService.addEventLike(this.id).subscribe(res=>{
      this.isLike=true;
    })
  }
  removeLike():void{
    this.likesService.removeEventLike(this.id).subscribe(res=>{
      this.isLike=false;
    })
  }
}
