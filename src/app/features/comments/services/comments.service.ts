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

  constructor(private http: HttpClient, private accountService: AccountService) {
      this.controllerUrl = environment.apiUrl + "comments/";
  }

  addComment(model: ICreateComment): Observable<any> {
      return this.http.post(this.controllerUrl, model, this.accountService.getHttpOptions());
  }
  getPlaceComments(id: number): Observable<IComment[]> {
      const httpOptions = {
          headers: new HttpHeaders({
              Authorization: 'Bearer ' + localStorage.getItem('user-token')
          })
      };
      return this.http.get<IComment[]>(this.controllerUrl + "place/" + id, httpOptions);
  }

  getEventComments(id:number): Observable<IComment[]> {
      const httpOptions = {
          headers: new HttpHeaders({
              Authorization: 'Bearer '+ localStorage.getItem('user-token')
          })
      };
      return this.http.get<IComment[]>(this.controllerUrl+"event/"+id,httpOptions);
  }

  getById(id:number): Observable<IComment> {
      const httpOptions = {
          headers: new HttpHeaders({
              Authorization: 'Bearer '+ localStorage.getItem('user-token')
          })
      };
      return this.http.get<IComment>(this.controllerUrl+id,httpOptions);
  }

  update(comment:ICreateComment): Observable<any> {
      return this.http.put(this.controllerUrl,comment,this.accountService.getHttpOptions());
  }


  addLike(id:number):Observable<any>{
    return this.http.post(this.controllerUrl+"addLike/"+id,this.accountService.getHttpOptions());
  }
  addDisLike(id:number):Observable<any>{
    return this.http.post(this.controllerUrl+"addDisLike/"+id,this.accountService.getHttpOptions());
  }

  removeLike(id:number):Observable<any>{
    return this.http.delete(this.controllerUrl+"removeLike/"+id,this.accountService.getHttpOptions());
  }

  removeDisLike(id:number):Observable<any>{
    return this.http.delete(this.controllerUrl+"removeDisLike/"+id,this.accountService.getHttpOptions());
  }
}
