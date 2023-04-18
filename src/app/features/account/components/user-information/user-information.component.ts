import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserFullUpdate } from '../../models/user-full-update';
import { UserService } from '../../services/user.service';
import { ICountry } from '../../models/location/country';
import { IRegion } from '../../models/location/region';
import { ICity } from '../../models/location/city';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit{
  user: IUser;

  userForm: FormGroup;

  countries:ICountry[]=[];
  regions:IRegion[]=[];
  cities:ICity[]=[];

  cityId:number | undefined;

  isRegionsEnable:boolean;
  isCitiesEnable:boolean;

  get formValue() {
    return this.userForm.value as IUserFullUpdate;
  }

  get userName() { return this.userForm.get('userName')!; }
  get phoneNumber() { return this.userForm.get('phoneNumber')!; }
  get birthDate() { return this.userForm.get('birthDate')!; }


  constructor(private userService: UserService,
    private fb: FormBuilder,
    private locationService:LocationService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      phoneNumber: ['',Validators.pattern(/^\+\d{2}-?\d{3}-?\d{3}-?\d{4}$/)],
      birthDate: ['']
    });

    this.userService.getFullUser().subscribe(res => {
      this.userForm.patchValue(res);
      this.user=res;
    });


    this.locationService.getCountries().subscribe(res=>{
      this.countries=res;
    })

  }

  formatPhoneNumber() {
    let control = this.userForm.controls['phoneNumber'];
    let str = control.value.replaceAll('-', '');
    str = str.replaceAll('+', '');

    let res: string = '+';
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.phoneNumberPattern[i + j] === '0') {
        res += str[i];
      }
      else {
        j++;
        res += '-';
        res += str[i];
      }
    }

    control.setValue(res);
  }

  phoneNumberPattern: string = '00-000-000-0000';

  selectCountry(event:any){
    let countryName = event.target.value;
    let country = this.countries.find(c=>c.name==countryName);

    if(country!=null)
    {
      this.locationService.getRegions(country.id).subscribe(res=>{
        this.regions=[];

        this.regions=res;
        this.isRegionsEnable=true;
        this.isCitiesEnable=false;
        this.cities=[];

        this.cityId=undefined;
      })
    }
  }

  selectRegion(event:any){
    let regionName = event.target.value;
    let region = this.regions.find(r=>r.name==regionName);

    if(region!=null)
    {
      this.locationService.getCities(region.id).subscribe(res=>{
        this.cities=res;
        this.isRegionsEnable=true;
        this.isCitiesEnable=true;

        this.cityId=undefined;
      })
    }
  }

  selectCity(event:any){
    let cityName = event.target.value;
    let city = this.cities.find(c=>c.name==cityName);

    if(city!=null)this.cityId=city.id;
  }


  save(){
    let updatedUser:IUserFullUpdate=this.userForm.value;
    updatedUser.cityId=this.cityId;
    updatedUser.id=this.user.id;

    if(updatedUser.phoneNumber=='')updatedUser.phoneNumber=undefined;

    this.userService.updateFullUser(updatedUser);
  }
}
