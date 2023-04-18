import { ExternalAuthDTO } from './../../../../core/auth/models/externalAuthDTO';
import { AccountService } from 'src/app/features/account/services/account.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ILoginResponse } from 'src/app/core/auth/models/injection-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-google-register-btn',
  templateUrl: './google-register-btn.component.html',
  styleUrls: ['./google-register-btn.component.scss']
})
export class GoogleRegisterBtnComponent {
  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private accountService: AccountService) {
  }

  loginWithGoogle(): void {
    console.log(this.socialAuthService);
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.accountService.signInWithGoogle();

    this.accountService.extAuthChanged.subscribe( user => {
      const externalAuth: ExternalAuthDTO = {
        provider: user.provider,
        idToken: user.idToken
      }
      this.validateExternalAuth(externalAuth);
    })
  }

  private validateExternalAuth(externalAuth: ExternalAuthDTO) {
    this.accountService.externalLogin(externalAuth)
      .subscribe({
        next: (res) => {
            this.accountService.saveToken(res.token);
            //this.accountService.sendAuthStateChangeNotification(res.isAuthSuccessful);
            this.router.navigateByUrl('/events');
      },
        error: (err: HttpErrorResponse) => {
          //this.errorMessage = err.message;
          //this.showError = true;
          this.accountService.signOutExternal();
        }
      });
  }
}
