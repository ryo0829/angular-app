import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { Login } from '../service/login';

@Component({
  selector: 'app-login-menu',
  templateUrl: '../page/login-menu.component.html',
  styleUrls: ['../page/login-menu.component.css']
})
export class LoginMenuComponent {

  model = new Login('', '');
  constructor(private router: Router) { }

  onSubmit() {
    //urlにname=adminを付与
    let navigationExtras: NavigationExtras = {
      queryParams: { 'name': 'admin' }
    };

    //入力されたログインIDが"admin"でpasswordが"password"の場合、homeMenuComponentに遷移
    if (this.model.loginId == 'admin' || this.model.password == 'password') {
        //urlクエリを付与
        this.router.navigate(['home'], navigationExtras);
    } else {
        this.model.message = "ログインに失敗しました";
    }
  }
}