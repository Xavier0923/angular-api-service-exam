import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './User';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.api.getUserData().subscribe((data: User) => {
      this.user = data;
    });
  }
}
