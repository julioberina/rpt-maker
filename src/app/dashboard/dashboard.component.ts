import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['/', 'dashboard', 'search']);
  }

  liftTracker() {
    this.router.navigate(['/', 'dashboard', 'lift-tracker']);
  }
}
