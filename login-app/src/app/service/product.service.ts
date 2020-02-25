import { Injectable } from '@angular/core';

import { Product } from './Product';

//@Injectableデコレーターを付与
@Injectable()
export class ProductService {
  //商品情報を配列として返す
  getProduct(): Product[] {
    return [
      {No:1,Name:"鮭の切り身",Price:200,Stock:-1,Date: new Date(2020, 10, 1)},
      {No:2,Name:"もも肉",Price:1000,Stock:50,Date: new Date(2019, 10, 1)},
      {No:3,Name:"納豆　5パック",Price:100,Stock:120,Date: new Date(2020, 5, 21)},
      {No:4,Name:"ふりかけ",Price:100,Stock:2000,Date: new Date(2020, 3, 1)},
      {No:5,Name:"キャベツ",Price:200,Stock:10,Date: new Date(2017, 10, 1)},
    ];
  }
}