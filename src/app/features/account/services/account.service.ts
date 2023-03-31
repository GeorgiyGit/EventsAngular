import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ILoginResponse } from 'src/app/core/auth/models/injection-response';
import { environment } from 'src/environments/environment.prod';
import { ICreateUser } from '../models/create-user';
import { IUserLogin } from '../models/user-login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ExternalAuthDTO } from 'src/app/core/auth/models/externalAuthDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private authChangeSub = new Subject<boolean>();
  private extAuthChangeSub = new Subject<SocialUser>();
  public authChanged = this.authChangeSub.asObservable();
  public extAuthChanged = this.extAuthChangeSub.asObservable();

  userKey = 'user-token'
  controllerUrl: string;
  rolesKey: 'user-roles'

  constructor(private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService,
    private externalAuthService: SocialAuthService) {

    this.controllerUrl = environment.apiUrl + "account/";
    this.externalAuthService.authState.subscribe((user) => {
      console.log(user)
      this.extAuthChangeSub.next(user);
    })
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
    let token = localStorage.getItem(this.userKey);
    return token;
  }
  getHttpOptions(): any {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.getToken()
      })
    };
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  }
  removeToken(): void {
    localStorage.removeItem(this.userKey);
  }
  private getRoles(): string {
    const token = this.getToken();
    if (token == null) return '';

    const decodedToken = this.jwtHelper.decodeToken();
    return decodedToken['role']
  }

  isUserAdmin(): boolean {
    return this.getRoles().includes('Admin');
  }
  isUserModerator(): boolean {
    return this.getRoles().includes('Moderator');
  }

  public signInWithGoogle = () => {
    this.externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOutExternal = () => {
    this.externalAuthService.signOut();
  }
  public externalLogin = (body: ExternalAuthDTO) => {
    return this.http.post<ILoginResponse>(this.controllerUrl+"external-login", body);
  }
}
