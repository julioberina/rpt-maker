import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';
import { CacheService } from 'src/shared/cache.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  public fg: any;
  public inputType = 'password';
  public isSubmitted = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private cacheService: CacheService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/', 'dashboard']);
    }

    this.fg = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      password: ['', Validators.required]
    });
  }

  toggleVisibility() {
    this.inputType = this.inputType == 'password' ? 'text' : 'password';
  }

  login(data: any) {
    this.isSubmitted = true;

    this.authService.login(data).subscribe(
      res => {
        this.cacheService.add('token', res.access_token);
        window.location.reload();
      },
      err => {
        this.snackBar.open('Invalid Username or Password', 'Dismiss', { duration: 3000 });
        console.error(err);
        this.isSubmitted = false;
      }
    );
  }
}
