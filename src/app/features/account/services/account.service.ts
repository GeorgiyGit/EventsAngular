import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResponse } from 'src/app/core/auth/models/injection-response';
import { environment } from 'src/environments/environment.prod';
import { ICreateUser } from '../models/create-user';
import { IUserLogin } from '../models/user-login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userKey = 'user-token'
  controllerUrl: string;
  rolesKey:'user-roles'

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {
    this.controllerUrl = environment.apiUrl + "account/";
   }

  login(model: IUserLogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.controllerUrl + 'login', model);
  }
  signUp(model: ICreateUser): Observable<any> {
    return this.http.post<ILoginResponse>(this.controllerUrl + 'register', model);
  }

  logout(): void {
    this.removeToken();
  }

  saveToken(token: string): void {
    localStorage.setItem(this.userKey, token);
  }
  // getCurrentUserEmail(): string | null {
  //   return localStorage.getItem(this.userKey);
  // }
  getToken(): string | null {
    return localStorage.getItem(this.userKey);
  }
  getHttpOptions(): any {
    return {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.getToken()
        })};
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  }
  removeToken(): void {
    localStorage.removeItem(this.userKey);
  }
  private getRoles():string{
    const token = this.getToken();
    if(token==null)return '';

    const decodedToken = this.jwtHelper.decodeToken();
    return decodedToken['role']
  }

  isUserAdmin():boolean{
    return this.getRoles().includes('Admin');
  }
  isUserModerator():boolean{
    return this.getRoles().includes('Moderator');
  }
}
