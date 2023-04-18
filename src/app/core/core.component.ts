import { Component, HostBinding } from '@angular/core';
import { OverflowStateService } from './services/overflow-state.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  @HostBinding('class.lock-overflow') childOpened = this.overflowStateService.getIsOverflow();
  
  constructor(private overflowStateService: OverflowStateService) { }
}
