import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLogin = true;
  public authStyle = {
    'login': {'color': '#ff1744'},
    'signup': {'color': 'black'}
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleComponent() {
    this.isLogin = !this.isLogin;
  }

  toggleColor(type: string) {
    if (type === 'login') {
      this.isLogin = true;
      this.authStyle = {
        'login': {'color': '#ff1744'},
        'signup': {'color': 'black'}
      }
    } else {
      this.isLogin = false;
      this.authStyle = {
        'signup': {'color': '#ff1744'},
        'login': {'color': 'black'}
      }
    }
  }
}
