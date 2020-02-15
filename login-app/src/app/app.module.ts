import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginMenuComponent } from './component/login-menu.component';
import { HomeMenuComponent } from './component/home-menu.component';
import { ProductComponent } from './component/product.component';
import { ProductService }  from './service/product.service';
import { ClientComponent } from './component/client.component';
import { ClientService } from './service/client.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginMenuComponent,
    HomeMenuComponent,
    ProductComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( [
      { path: 'home', component: HomeMenuComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginMenuComponent },
      { path: 'client', component: ClientComponent },
      { path: 'product', component: ProductComponent }
    ] )
  ],
  providers: [ProductService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
