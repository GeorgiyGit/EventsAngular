import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserFullUpdate } from '../../models/user-full-update';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  isEventsOpen: boolean;
  isPlacesOpen: boolean;
  isUserInformationOpen: boolean = true;

  user: IUser;
  avatarUrl: string;
  filesServerUrl: string;

  constructor(private router: Router,
    private userService: UserService,
    private sanitizer: DomSanitizer) {
    this.filesServerUrl = environment.filesUrl;
  }
  ngOnInit(): void {
    this.userService.getFullUser().subscribe(res => {
      this.user = res;

      if (this.user.avatar != null) {
        this.avatarUrl = `${this.filesServerUrl}400_${this.user.avatar.fullName}`;
      }
      else {
        this.avatarUrl = `https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png`;
      }
    })
  }

  openUserInfo() {
    this.isUserInformationOpen = true;
    this.isEventsOpen = false;
    this.isPlacesOpen = false;

    this.router.navigateByUrl('account/info');
  }

  openEvents() {
    this.isUserInformationOpen = false;
    this.isEventsOpen = true;
    this.isPlacesOpen = false;

    this.router.navigateByUrl('account/events');
  }

  openPlaces() {
    this.isUserInformationOpen = false;
    this.isEventsOpen = false;
    this.isPlacesOpen = true;

    this.router.navigateByUrl('account/places');
  }

  openCropper(){
    this.router.navigate([{ outlets: { overflow: ['avatar-cropper'] } }])
  }
}
