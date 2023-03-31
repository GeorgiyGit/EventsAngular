import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountService } from '../../account/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  controllerUrl: string;

    constructor(private http: HttpClient, private accountService: AccountService) {
        this.controllerUrl = environment.apiUrl + "likes/";
    }
    
  addPlaceLike(id: number): Observable<any> {
    return this.http.post(this.controllerUrl+'add_place_like/'+id,null, this.accountService.getHttpOptions());
  }
  addEventLike(id: number): Observable<any> {
    return this.http.post(this.controllerUrl+'add_event_like/'+id,null, this.accountService.getHttpOptions());
  }
  removePlaceLike(id: number): Observable<any> {
    return this.http.post(this.controllerUrl+'remove_place_like/'+id,null, this.accountService.getHttpOptions());
  }
  removeEventLike(id: number): Observable<any> {
    return this.http.post(this.controllerUrl+'remove_event_like/'+id,null, this.accountService.getHttpOptions());
  }

  isPlaceLike(id: number): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    
    return this.http.get<boolean>(this.controllerUrl+'is_place_like/'+id, httpOptions);
  }
  isEventLike(id: number): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };

    return this.http.get<boolean>(this.controllerUrl+'is_event_like/'+id, httpOptions);
  }
}
