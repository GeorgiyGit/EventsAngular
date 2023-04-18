import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverflowStateService {
  IsOverflow = true;
  
  constructor() { }

  lockOverflow() {
    this.IsOverflow=false;
  }
  unlockOverflow()
  {
    this.IsOverflow=true;
  }
  getIsOverflow():boolean{
    return this.IsOverflow;
  }
}
