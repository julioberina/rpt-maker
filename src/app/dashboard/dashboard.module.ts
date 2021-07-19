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
import { WorkoutViewerComponent } from './workout-viewer/workout-viewer.component';
import { SharedModule } from 'src/shared/shared.module';
import { AddWorkoutDialogComponent } from './add-workout-dialog/add-workout-dialog.component';
import { DeleteWorkoutDialogComponent } from './delete-workout-dialog/delete-workout-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LiftTrackerComponent,
    NavFooterComponent,
    SearchComponent,
    DashHeaderComponent,
    WorkoutViewerComponent,
    AddWorkoutDialogComponent,
    DeleteWorkoutDialogComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
