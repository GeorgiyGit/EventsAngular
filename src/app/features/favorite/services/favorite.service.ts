import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountService } from '../../account/services/account.service';
import { IEvent } from '../../events/models/event';
import { IPlace } from '../../places/models/place';
import { ISimplePlace } from '../../places/models/simple-place';
import { ISimpleEvent } from '../../events/models/simple-event';
import { IFavoriteEvent } from '../../events/models/favorite-event';
import { IFavoritePlace } from '../../places/models/favorite-place';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  controllerUrl: string;

  constructor(private accountService: AccountService,
              private http: HttpClient,
              private toastr:ToastrService) {
    this.controllerUrl = environment.apiUrl + "favorite/";
   }

  addFavoritePlace(id:number):Observable<any>{
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.post(this.controllerUrl+"add-place/"+id,null,this.accountService.getHttpOptions());
  }

  addFavoriteEvent(id:number):Observable<any>{
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.post(this.controllerUrl+"add-event/"+id,null,this.accountService.getHttpOptions());
  }


  removeFavoritePlace(id:number):Observable<any>{
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.delete(this.controllerUrl+"remove-place/"+id,this.accountService.getHttpOptions());
  }

  removeFavoriteEvent(id:number):Observable<any>{
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.delete(this.controllerUrl+"remove-event/"+id,this.accountService.getHttpOptions());
  }


  getFavoritePlaces():Observable<IFavoritePlace[]>{
    let token = this.accountService.getToken();
    if(token==null){
      return new Observable<[]>;
    }

    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ token
        })
    };
    return this.http.get<IFavoritePlace[]>(this.controllerUrl+"get-places",httpOptions);
  }

  getFavoriteEvents():Observable<IFavoriteEvent[]>{
    let token = this.accountService.getToken();
    if(token==null){
      return new Observable<[]>;
    }

    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ token
        })
    };
    return this.http.get<IFavoriteEvent[]>(this.controllerUrl+"get-events",httpOptions);
  }


  isFavoritePlace(id:number):Observable<boolean>{
    let token = this.accountService.getToken();
    if(token==null){
      return new Observable<false>;
    }


    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ token
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-place/"+id,httpOptions);
  }

  isFavoriteEvent(id:number):Observable<boolean>{
    let token = this.accountService.getToken();
    if(token==null){
      return new Observable<false>;
    }

    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ token
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-event/"+id,httpOptions);
  }
}
