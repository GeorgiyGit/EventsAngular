import { IImagePreview } from './../../../images/models/imagePreview';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre } from 'src/app/features/genres/models/genre';
import { ICreatePlace } from '../../models/create-place';
import { PlacesService } from '../../services/places.service';
import { IImage } from 'src/app/features/images/models/image';

@Component({
  templateUrl: './customer-add-place.component.html',
  styleUrls: ['./customer-add-place.component.scss']
})
export class CustomerAddPlaceComponent {
  id: string;
  isAddMode: boolean;
  placeForm: FormGroup;


  imageFiles: IImagePreview[] = [];

  get formValue() {
    return this.placeForm.value as ICreatePlace;
  }

  get name() { return this.placeForm.get('name')!; }
  get text() { return this.placeForm.get('text')!; }
  get route() { return this.placeForm.get('route')!; }
  get site() { return this.placeForm.get('site')!; }
  get facebook() { return this.placeForm.get('facebook')!; }
  get instagram() { return this.placeForm.get('instagram')!; }
  //get googleMaps() { return this.placeForm.get('googleMaps')!; }


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private placesService: PlacesService,
    private router: Router,
    private route2: ActivatedRoute) {
  }

  public selectedGenres: IGenre[];

  ngOnInit(): void {
    this.id = this.route2.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.selectedGenres = [];

    this.placeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
      route: ['', [Validators.required, Validators.maxLength(500)]],
      site: [''],
      facebook: [''],
      instagram: ['']
      //googleMaps: ['', Validators.required]
    });


    if (!this.isAddMode) {
      this.placesService.getById(parseInt(this.id))
        .subscribe(res => {
          this.placeForm.patchValue(res);
          this.selectedGenres = res.types;
        });
    }
  }

  public placeholder = "Types";
  public types: IGenre[];
  public image: File;

  sumbit(): void {

    if (this.placeForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const place: ICreatePlace = this.placeForm.value;

    place.types = [];

    this.types.forEach(element => {
      place.types.push(element.id);
    });

    if (place.facebook == '') place.facebook = undefined;
    if (place.instagram == '') place.instagram = undefined;

    if (this.isAddMode) {
      let files: File[] = [];

      for (let image of this.imageFiles) {
        files.push(image.imageFile);
      }

      place.images = files;

      this.placesService.addPlace(place).subscribe(result => {
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
      place.id = parseInt(this.id);

      this.placesService.updatePlace(place).subscribe(result => {
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

  addParent(genres: IGenre[]) {
    this.types = genres;
  }

  getOriginalImages(images: IImage[]) {
    //this.types = genres;
  }

  getImageFiles(imageFiles: IImagePreview[]) {
    this.imageFiles = imageFiles;
  }
}
