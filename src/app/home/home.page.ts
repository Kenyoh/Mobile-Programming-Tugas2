import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = {
    username : '',
    password : ''
  }

  constructor(
    private router : Router
  ) {}

  doLogin() {

    localStorage.setItem('username',this.form.username)
    localStorage.setItem('password',this.form.password)

    this.router.navigateByUrl('welcome')

  }

}
