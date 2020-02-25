import { Injectable } from '@angular/core';

import { Client } from './client';

//@Injectableデコレーターを付与
@Injectable()
export class ClientService {
  //顧客情報を配列として返す
  getClient(): Client[] {
    return [
      {No:1,Name:"斎藤",Seibethu:"男性",Age:50,Date: new Date(2020, 10, 1)},
      {No:2,Name:"田中",Seibethu:"男性",Age:26,Date: new Date(2019, 10, 1)},
      {No:3,Name:"鈴木",Seibethu:"男性",Age:18,Date: new Date(2020, 5, 21)},
      {No:4,Name:"井上",Seibethu:"女性",Age:40,Date: new Date(2020, 3, 1)},
      {No:5,Name:"堀井",Seibethu:"女性",Age:35,Date: new Date(2017, 10, 1)},
    ];
  }
}