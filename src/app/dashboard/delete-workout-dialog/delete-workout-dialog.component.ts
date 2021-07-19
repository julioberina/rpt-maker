import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-workout-dialog',
  templateUrl: './delete-workout-dialog.component.html',
  styleUrls: ['./delete-workout-dialog.component.scss']
})
export class DeleteWorkoutDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteWorkoutDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
}
