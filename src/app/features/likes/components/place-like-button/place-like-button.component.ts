import { Component, Input, OnInit } from '@angular/core';
import { LikesService } from '../../services/likes.service';

@Component({
  selector: 'app-place-like-button',
  templateUrl: './place-like-button.component.html',
  styleUrls: ['./place-like-button.component.scss']
})
export class PlaceLikeButtonComponent implements OnInit {
  
  @Input() id:number; 
  isLike:boolean;

  constructor(private likesService:LikesService) { }
  ngOnInit(): void {
    this.likesService.isPlaceLike(this.id).subscribe(res=>{
      this.isLike=res;
    })
  }
    
  addLike():void{
    this.likesService.addPlaceLike(this.id).subscribe(res=>{
      this.isLike=true;
    })
  }
  removeLike():void{
    this.likesService.removePlaceLike(this.id).subscribe(res=>{
      this.isLike=false;
    })
  }
}
