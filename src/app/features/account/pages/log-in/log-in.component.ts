import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/core/auth/models/injection-response';
import { ICreateUser } from '../../models/create-user';
import { AccountService } from '../../services/account.service';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  logInForm: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
    password: ['', Validators.compose([Validators.required])]//, Validators.pattern("^(?=.*\d)(?!.*\s)(?=.*[a-zA-Z]).{8,20}$")])]
  });

  get formValue() {
    return this.logInForm.value as ICreateUser;
  }

  get email() { return this.logInForm.get('email')!; }
  get password() { return this.logInForm.get('password')!; }

  response: { dbPath: '' };

  constructor(private fb: FormBuilder, private http: HttpClient, private accountService: AccountService, private router: Router) {
  }
  ngOnInit(): void {
  }


  isPassVisible = false;

  eyeClick() {
    this.isPassVisible = !this.isPassVisible;
    console.log(this.isPassVisible);
  }

  logIn(): void {

    if (this.logInForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const user: ICreateUser = this.logInForm.value;

    this.accountService.login(user).subscribe((result:ILoginResponse) => {
      console.log(result);

      this.accountService.saveToken(result.token);
      this.router.navigateByUrl('/');
    }, (error: { error: { ErrorMessage: any; }; message: any; }) => {
      console.error(error);
      if (error?.error?.ErrorMessage)
        alert(error.error.ErrorMessage);
      else
        alert(error.message);
    });
  }
  private createForm(model: ICreateUser): FormGroup {
    return this.fb.group(model);
  }
  private updateForm(model: Partial<ICreateUser>): void {
    this.logInForm.patchValue(model)
  }
}