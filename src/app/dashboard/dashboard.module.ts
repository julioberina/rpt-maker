import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LiftTrackerComponent } from './lift-tracker/lift-tracker.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { SearchComponent } from './search/search.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    LiftTrackerComponent,
    NavFooterComponent,
    SearchComponent,
    DashHeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
