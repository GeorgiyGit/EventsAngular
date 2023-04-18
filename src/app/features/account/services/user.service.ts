import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { IUserFullUpdate } from '../models/user-full-update';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  controllerUrl: string;

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.controllerUrl = environment.apiUrl + "user/";
  }

  getFullUser(): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IUser>(this.controllerUrl + 'get-user', httpOptions);
  }

  updateFullUser(model:IUserFullUpdate): Observable<any> {
    return this.http.put(this.controllerUrl + 'update-user',model, this.accountService.getHttpOptions());
  }

  changeAvatar(file:File): Observable<any> {
    let formData = new FormData();

    formData.append("file", file);

    return this.http.post(this.controllerUrl + 'change-avatar',formData, this.accountService.getHttpOptions());
  }
}
