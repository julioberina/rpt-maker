import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LiftTrackerComponent } from './lift-tracker/lift-tracker.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LiftTrackerComponent,
    NavFooterComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
