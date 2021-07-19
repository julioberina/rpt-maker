import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-workout-dialog',
  templateUrl: './add-workout-dialog.component.html',
  styleUrls: ['./add-workout-dialog.component.scss']
})
export class AddWorkoutDialogComponent implements OnInit {

  public fg: any;

  constructor(private dialogRef: MatDialogRef<AddWorkoutDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      alias: ['', Validators.required]
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}
