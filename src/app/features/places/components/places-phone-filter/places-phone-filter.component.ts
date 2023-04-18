import { IPlaceFilter } from '../../models/place-filter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IGenre } from 'src/app/features/genres/models/genre';

@Component({
  selector: 'app-places-phone-filter',
  templateUrl: './places-phone-filter.component.html',
  styleUrls: ['./places-phone-filter.component.scss']
})
export class PlacesPhoneFilterComponent implements OnInit{

  @Output() filterEvent = new EventEmitter<IPlaceFilter>();

  constructor(private fb: FormBuilder){}
  filterForm:FormGroup;

  get formValue() {
    return this.filterForm.value as IPlaceFilter;
  }

  get orderType() { return this.filterForm.get('orderType')!; }

  selectedGenres: IGenre[] = [];
  placeholder = "Add Type";

  types:IGenre[];
  
  ngOnInit(): void {
    this.filterForm=this.fb.group({
      orderType:[]
    });
  }

  addGenre(genres: IGenre[]) {
    this.types = genres;
  }

  sumbit(){
    let res:IPlaceFilter;
    res=this.formValue;
    res.genres=this.selectedGenres;

    this.filterEvent.emit(res);
  }


}
