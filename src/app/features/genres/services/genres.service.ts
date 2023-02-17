import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountService } from '../../account/services/account.service';
import { ICreateGenre } from '../models/create-genre';
import { IGenre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  controllerUrl: string;

  constructor(private http: HttpClient,
              private accountService: AccountService) {
    this.controllerUrl = environment.apiUrl + "genres/";
   }

  getAll(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.controllerUrl);
  }
  addGenre(model:ICreateGenre):Observable<any>{
    return this.http.post<ICreateGenre[]>(this.controllerUrl,model,this.accountService.getHttpOptions());
  }
  removeGenre(id:number):Observable<any>{
    return this.http.delete(this.controllerUrl+id,this.accountService.getHttpOptions());
  }
}
