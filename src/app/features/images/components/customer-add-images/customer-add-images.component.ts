import { IImagePreview } from './../../models/imagePreview';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IImage } from '../../models/image';

@Component({
  selector: 'app-customer-add-images',
  templateUrl: './customer-add-images.component.html',
  styleUrls: ['./customer-add-images.component.scss']
})
export class CustomerAddImagesComponent implements OnInit {

  @Input() originalImages: IImage[] = [];

  @Output() selectedImageFilesEvent = new EventEmitter<IImagePreview[]>();
  @Output() selectedImagesEvent = new EventEmitter<IImage[]>();

  imagePreviews: IImagePreview[] = [];

  ngOnInit(): void {
  }

  url: string | ArrayBuffer | null = null;
  
  
  addImageFilesEvent(event:any){
    this.addImageFiles(event.target.files);
  }

  addImageFiles(files: any): void {
    if (files == null) return;

    for (let i = 0; i < files.length; i++) {

      let file = files[i];
      let imagePreview: IImagePreview = {
        imageFile: file,
        path: ''
      };



      const reader = new FileReader();
      reader.onload = e => imagePreview.path = reader.result;

      reader.readAsDataURL(file);

      console.log(imagePreview.path);

      this.imagePreviews.push(imagePreview);

      this.selectedImageFilesEvent.emit(this.imagePreviews);
    }
  }

  removeImageFile(imagePreview: IImagePreview) {
    this.imagePreviews = this.imagePreviews.filter(i => i != imagePreview);
    
    this.selectedImageFilesEvent.emit(this.imagePreviews);
  }

  removeOriginalImage(img: IImage) {
    this.originalImages = this.originalImages.filter(i => i != img);

    this.selectedImagesEvent.emit(this.originalImages);
  }
}
