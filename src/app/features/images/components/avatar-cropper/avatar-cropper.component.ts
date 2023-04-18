import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent, ImageCropperComponent, base64ToFile } from 'ngx-image-cropper';
import { UserService } from 'src/app/features/account/services/user.service';

@Component({
  selector: 'app-avatar-cropper',
  templateUrl: './avatar-cropper.component.html',
  styleUrls: ['./avatar-cropper.component.scss']
})
export class AvatarCropperComponent {
  imageChangedEvent: any = '';
  croppedImage: any;

  constructor(private router:Router,
              private userService:UserService){}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  sendImage(){
    let _blob = base64ToFile(this.croppedImage);
    const imgFile: File = new File([_blob], 'avatar.png',{lastModified: (Date.now).length, type: 'image/png'});

    this.userService.changeAvatar(imgFile).subscribe(res=>{
      this.closeOverflow();
    })
  }

  closeOverflow(): void {
    this.router.navigate([{outlets: {overflow: null}}]);
  }

  dataURItoBlob(dataURI:any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });    
    return blob;
 }
}
