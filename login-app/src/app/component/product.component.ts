import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductService  } from '../service/product.service'

@Component({
  selector: 'app-pref-view',
  templateUrl: '../page/Product.component.html',
  styleUrls: ['../page/Product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];
  nmclass: String;
  private selectItem:any;

  //ProductServiceサービスを有効化
  constructor(private productservice: ProductService) {}

  //コンポーネントの初期化時にデータを取得
  ngOnInit() {
    this.product = this.productservice.getProduct();
    this.nmclass = 'num'
  }

  //列をクリックしたら呼ばれるメソッド
  onClickRow(item:any){
    this.selectItem=item;
  }

  //クリック時に色を変更
  rowBackColor(item:any):string{
    if(this.selectItem===undefined)return 'white';
    if(this.selectItem.Name===item.Name)return 'gainsboro';
    return 'white';
  }
}