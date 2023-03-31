import { IComment } from './../../models/comment';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentsListComponent } from '../comments-list/comments-list.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input() comment: IComment;

  isRespond: boolean;

  subCount: number;

  isSubCommentsOpen:boolean=false;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getChildCount();
  }

  getChildCount():void{
    this.commentsService.getChildCommentsCount(this.comment.id).subscribe(res=>{
      this.subCount=res;
    })
  }
  addLike(): void {
    if (this.comment.isDisliked == true) this.removeDisLike();

    this.commentsService.addLike(this.comment.id).subscribe(res => {
      this.comment.isLiked = true;
      this.comment.likes++;
    });
  }

  addDisLike(): void {
    if (this.comment.isLiked == true) this.removeLike();

    this.commentsService.addDisLike(this.comment.id).subscribe(res => {
      this.comment.isDisliked = true;
      this.comment.dislikes++;
    });
  }

  removeLike(): void {
    this.commentsService.removeLike(this.comment.id).subscribe(res => {
      this.comment.isLiked = false;
      this.comment.likes--;
    });
  }

  removeDisLike(): void {
    this.commentsService.removeDisLike(this.comment.id).subscribe(res => {
      this.comment.isDisliked = false;
      this.comment.dislikes--;
    });
  }

  respond(): void {
    this.isRespond = !this.isRespond;
  }


  closeRespond(flag: boolean): void {
    this.isRespond = false;
    this.getChildCount();
  }

  subComments():void{
    this.isSubCommentsOpen=!this.isSubCommentsOpen;
  }

}
