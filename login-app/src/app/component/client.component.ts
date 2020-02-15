import { Component, OnInit } from '@angular/core';
import { Client } from '../service/client';
import { ClientService  } from '../service/client.service'

@Component({
  selector: 'app-client',
  templateUrl: '../page/client.component.html',
  styleUrls: ['../page/client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client[];
  private selectItem:any;

  //ProductServiceサービスを有効化
  constructor(private clientService: ClientService) {}

  //コンポーネントの初期化時に記事情報を取得
  ngOnInit() {
    this.client = this.clientService.getClient();
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
