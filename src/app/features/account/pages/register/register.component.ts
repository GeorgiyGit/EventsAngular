import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateUser } from '../../models/create-user';
import { AccountService } from '../../services/account.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  signUpForm: FormGroup = this.fb.group({
    userName: ['',Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(100)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(200)])],
    password: ['', Validators.compose([Validators.required])]//, Validators.pattern("^(?=.*\d)(?!.*\s)(?=.*[a-zA-Z]).{8,20}$")])]
  });
 
  get formValue() {
    return this.signUpForm.value as ICreateUser;
  }

  get userName() { return this.signUpForm.get('userName')!; }
  get email() { return this.signUpForm.get('email')!; }
  get password() { return this.signUpForm.get('password')!; }

  response: { dbPath: '' };

  constructor(private fb: FormBuilder, private http: HttpClient, private accountService: AccountService, private router: Router) { 
  }
  ngOnInit(): void {
  }


  isPassVisible=false;

  eyeClick(){
    this.isPassVisible=!this.isPassVisible;
    console.log(this.isPassVisible);
  }

  signUp(): void {

    if (this.signUpForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const user: ICreateUser = this.signUpForm.value;

    this.accountService.signUp(user).subscribe((result: any) => {
      console.log(result);

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
    this.signUpForm.patchValue(model)
  }
}
