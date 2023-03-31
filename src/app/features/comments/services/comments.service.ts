import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountService } from '../../account/services/account.service';
import { IComment } from '../models/comment';
import { ICreateComment } from '../models/create-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  controllerUrl: string;

  constructor(private http: HttpClient, 
              private accountService: AccountService,
              private toastr:ToastrService) {
    this.controllerUrl = environment.apiUrl + "comments/";
  }

  addComment(model: ICreateComment): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }
    
    return this.http.post(this.controllerUrl, model, this.accountService.getHttpOptions());
  }
  getPlaceComments(id: number): Observable<IComment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IComment[]>(this.controllerUrl + "place/" + id, httpOptions);
  }

  getEventComments(id: number): Observable<IComment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IComment[]>(this.controllerUrl + "event/" + id, httpOptions);
  }

  getChildComments(id: number): Observable<IComment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IComment[]>(this.controllerUrl + "childs/" + id, httpOptions);
  }

  getChildCommentsCount(id: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<number>(this.controllerUrl + "childs-count/" + id, httpOptions);
  }

  getById(id: number): Observable<IComment> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IComment>(this.controllerUrl + id, httpOptions);
  }

  update(comment: ICreateComment): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.put(this.controllerUrl, comment, this.accountService.getHttpOptions());
  }


  addLike(id: number): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }
    
    return this.http.post(this.controllerUrl + "addLike/" + id, null, this.accountService.getHttpOptions());
  }
  addDisLike(id: number): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.post(this.controllerUrl + "addDisLike/" + id, null, this.accountService.getHttpOptions());
  }

  removeLike(id: number): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.delete(this.controllerUrl + "removeLike/" + id, this.accountService.getHttpOptions());
  }

  removeDisLike(id: number): Observable<any> {
    let token = this.accountService.getToken();
    if(token==null){
      this.toastr.error("You are not authorized!!!");
      return new Observable<1>;
    }

    return this.http.delete(this.controllerUrl + "removeDisLike/" + id, this.accountService.getHttpOptions());
  }
}
