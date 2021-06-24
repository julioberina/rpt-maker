import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent implements OnInit {

  private navUrls: any = {
    'home': '',
    'search': '/search',
    'lift': '/lift-tracker'
  }

  @Input() public activeNavItem: string = 'home';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buttonStyle(navItem: string) {
    return {'color': (navItem === this.activeNavItem ? 'red' : 'white') };
  }

  navAction(navItem: string) {
    this.router.navigateByUrl('/dashboard' + this.navUrls[navItem]);
  }
}
