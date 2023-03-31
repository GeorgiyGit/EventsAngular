import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { AccountService } from 'src/app/features/account/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public accountService: AccountService,
              private responsive: BreakpointObserver) { }

  isPhoneMenuOpen: boolean;

  ngOnInit(): void {
    console.log(this.accountService.isAuthenticated());

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetLandscape])
      .subscribe(result => {

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.XSmall] || breakpoints[Breakpoints.TabletLandscape] || breakpoints[Breakpoints.HandsetLandscape]) {
          this.isPhoneMenuOpen=true;
        }
        else this.isPhoneMenuOpen=false;

      });
  }

  logout(): void {
    this.accountService.logout();
  }
}
