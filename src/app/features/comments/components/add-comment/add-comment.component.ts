import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateComment } from '../../models/create-comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit{
  
  id: string;
  isAddMode: boolean;
  commentForm: FormGroup;
  @Input() parentId?: number;
  @Input() eventId?: number;
  @Input() placeId?: number;




  @Output() addCommentEmitter = new EventEmitter<boolean>();
  
  get formValue() {
    return this.commentForm.value as ICreateComment;
  }

  get text() { return this.commentForm.get('text')!; }


  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentService: CommentsService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.commentForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]]
    });


    if (!this.isAddMode) {
      this.commentService.getById(parseInt(this.id))
        .subscribe(res => {
          console.log(res);
          this.commentForm.patchValue(res);
        });
    }
  }



  sumbit() {
    if (this.commentForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const comment: ICreateComment = this.commentForm.value;


    comment.parentId = this.parentId;
    comment.eventId = this.eventId;
    comment.placeId = this.placeId;

    if (!this.isAddMode) {
      this.commentService.addComment(comment).subscribe(result => {
        this.commentForm = this.fb.group({
          text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]]
        });
        this.addCommentEmitter.emit(true);
        
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
    else {
      comment.id = parseInt(this.id);

      this.commentService.update(comment).subscribe(result => {
        this.commentForm = this.fb.group({
          text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]]
        });
        this.addCommentEmitter.emit(true);
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
  }
}