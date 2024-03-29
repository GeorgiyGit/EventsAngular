import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre } from 'src/app/features/genres/models/genre';
import { IImage } from 'src/app/features/images/models/image';
import { IImagePreview } from 'src/app/features/images/models/imagePreview';
import { ISimplePlace } from 'src/app/features/places/models/simple-place';
import { ICreateEvent } from '../../models/create-event';
import { EventsService } from '../../services/events.service';

@Component({
  templateUrl: './customer-add-event.component.html',
  styleUrls: ['./customer-add-event.component.scss']
})
export class CustomerAddEventComponent {


  id: string;
  isAddMode: boolean;
  eventForm: FormGroup;

  imageFiles: IImagePreview[] = [];

  get formValue() {
    return this.eventForm.value as ICreateEvent;
  }

  get title() { return this.eventForm.get('title')!; }
  get text() { return this.eventForm.get('text')!; }
  get isOnline() { return this.eventForm.get('isOnline')!; }
  get site() { return this.eventForm.get('site')!; }
  get facebook() { return this.eventForm.get('facebook')!; }
  get instagram() { return this.eventForm.get('instagram')!; }
  get eventTime() { return this.eventForm.get('eventTime')!; }
  get price() { return this.eventForm.get('price')!; }

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  public selectedGenres: IGenre[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.selectedGenres = [];

    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
      isOnline: [false],

      site: [''],
      facebook: [''],
      instagram: [''],

      eventTime: [''],
      price: [0, Validators.min(0)]
    });


    if (!this.isAddMode) {
      this.eventsService.getById(parseInt(this.id))
        .subscribe(res => {
          console.log(res);
          this.eventForm.patchValue(res);
          this.selectedGenres = res.types;
          this.placeId = res.placeId ?? 0;
          console.log(this.selectedGenres);
        });
    }
  }

  public placeholder = "Types";
  public types: IGenre[];
  public placeId: number;
  public isOnline2: boolean = false;


  checkChange() {
    this.isOnline2 = !this.isOnline2;
  }

  sumbit(): void {

    if (this.eventForm.invalid) {
      alert("Invalid data!");
      return;
    }

    

    const _event: ICreateEvent = this.eventForm.value;

    _event.types = [];

    this.types.forEach(element => {
      _event.types.push(element.id);
    });
    if (this.placeId != null && this.isOnline2==false) _event.placeId = this.placeId;

    if (_event.facebook == '') _event.facebook = undefined;
    if (_event.instagram == '') _event.instagram = undefined;

    if (this.isAddMode) {
      let files: File[] = [];

      for (let image of this.imageFiles) {
        files.push(image.imageFile);
      }

      _event.images = files;
      
      this.eventsService.addEvent(_event).subscribe(result => {
        console.log(result);

        this.router.navigateByUrl('/');
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
    else {
      _event.placeId = this.placeId;
      _event.id = parseInt(this.id);

      this.eventsService.updateEvent(_event).subscribe(result => {
        console.log(result);

        this.router.navigateByUrl('/');
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }

  }

  addGenre(genres: IGenre[]) {
    this.types = genres;
  }

  selectPlace(place: ISimplePlace) {
    this.placeId = place.id;
  }
  
  getOriginalImages(images: IImage[]) {
    //this.types = genres;
  }

  getImageFiles(imageFiles: IImagePreview[]) {
    this.imageFiles = imageFiles;
  }
}
