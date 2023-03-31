import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IComment } from '../../models/comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() placeId?: number;
  @Input() eventId?: number;

  @Input() parentId:number;
  comments: IComment[];

  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    if (this.placeId != null) {
      this.commentsService.getPlaceComments(this.placeId).subscribe(res => {
        this.comments = res;
      })
    }
    else if (this.eventId != null) {
      this.commentsService.getEventComments(this.eventId).subscribe(res => {
        this.comments = res;
      })
    }
    else if(this.parentId!=null){
      this.commentsService.getChildComments(this.parentId).subscribe(res=>{
        this.comments=res;
        this.myEvent.emit(this.comments);
      })
    }
  }
}

