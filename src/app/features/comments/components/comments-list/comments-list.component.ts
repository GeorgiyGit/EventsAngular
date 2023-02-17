import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../models/comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() placeId?:number;
  @Input() eventId?:number;

  comments:IComment[];
  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    if(this.placeId!=null){
      this.commentsService.getPlaceComments(this.placeId).subscribe(res=>{
        this.comments=res;
      })
    }
    else if(this.eventId!=null){
      this.commentsService.getEventComments(this.eventId).subscribe(res=>{
        this.comments=res;
      })
    }
  }


  addLike(id:number):void{
    this.commentsService.addLike(id).subscribe(res=>{
      this.comments[id].isLiked=true;
    });
  }
  
  addDisLike(id:number):void{
    this.commentsService.addDisLike(id).subscribe(res=>{
      this.comments[id].isDisLiked=true;
    });
  }
  
  removeLike(id:number):void{
    this.commentsService.removeLike(id).subscribe(res=>{
      this.comments[id].isLiked=false;
    });
  }

  removeDisLike(id:number):void{
    this.commentsService.removeDisLike(id).subscribe(res=>{
      this.comments[id].isDisLiked=false;
    });
  }
}

