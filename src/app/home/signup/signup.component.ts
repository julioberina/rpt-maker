import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  public fg: any;
  public inputType = 'password';
  public isSubmitted = false;

  constructor(private fb: FormBuilder,
              private homeService: HomeService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      password: ['', Validators.required]
    });
  }

  toggleVisibility() {
    this.inputType = this.inputType == 'password' ? 'text' : 'password';
  }

  signup() {
    this.isSubmitted = true;

    this.homeService.createUser(this.fg.value).subscribe(
      res => {
        this.snackBar.open('Sign up successful', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar']
        });
      },
      err => {
        this.snackBar.open('Error signing up', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar']
        });
    });

    this.isSubmitted = false;
    this.fg.reset();
  }
}
