import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from 'src/shared/cache.service';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {

  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {

  }

  logout() {
    this.cacheService.clear();
    window.location.reload();
  }
}
