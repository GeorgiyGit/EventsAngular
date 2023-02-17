import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountService } from '../../account/services/account.service';
import { IEvent } from '../../events/models/event';
import { IPlace } from '../../places/models/place';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  controllerUrl: string;

  constructor(private accountService: AccountService,
              private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "favorite/";
   }

  addFavoritePlace(id:number):Observable<any>{
    return this.http.post(this.controllerUrl+"add-place/"+id,null,this.accountService.getHttpOptions());
  }

  addFavoriteEvent(id:number):Observable<any>{
    return this.http.post(this.controllerUrl+"add-event/"+id,null,this.accountService.getHttpOptions());
  }


  removeFavoritePlace(id:number):Observable<any>{
    return this.http.delete(this.controllerUrl+"remove-place/"+id,this.accountService.getHttpOptions());
  }

  removeFavoriteEvent(id:number):Observable<any>{
    return this.http.delete(this.controllerUrl+"remove-event/"+id,this.accountService.getHttpOptions());
  }


  getFavoritePlaces():Observable<IPlace[]>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ this.accountService.getToken()
        })
    };
    return this.http.get<IPlace[]>(this.controllerUrl+"get-places",httpOptions);
  }

  getFavoriteEvents():Observable<IEvent[]>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ this.accountService.getToken()
        })
    };
    return this.http.get<IEvent[]>(this.controllerUrl+"get-events",httpOptions);
  }


  isFavoritePlace(id:number):Observable<boolean>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ this.accountService.getToken()
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-place/"+id,httpOptions);
  }

  isFavoriteEvent(id:number):Observable<boolean>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ this.accountService.getToken()
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-event/"+id,httpOptions);
  }
}
