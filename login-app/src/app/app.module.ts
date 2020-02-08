import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService }  from './product/product.service';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';

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
