import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

import { QuestionListConfig } from '../core/question-list-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
    
  listConfig: QuestionListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
  }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }

}
