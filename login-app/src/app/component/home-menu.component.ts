import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: '../page/home-menu.component.html',
  styleUrls: ['../page/home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  name:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
    });
  }

  doProductClick(){
    //商品一覧に遷移
    this.router.navigate(['product']);
  }

  doClientClick(){
    //顧客一覧に遷移
    this.router.navigate(['client']);
  }

}
