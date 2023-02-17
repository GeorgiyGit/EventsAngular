import { Component } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public accountService: AccountService) { }

  
  ngOnInit(): void {
  }

  logout(): void {
    this.accountService.logout();
  }
}
