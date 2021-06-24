import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LiftTrackerComponent } from './lift-tracker/lift-tracker.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'lift-tracker', component: LiftTrackerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
