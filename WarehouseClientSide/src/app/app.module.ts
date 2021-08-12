import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormCapacityComponent } from './product-form/product-form-capa.conponent';
import { ProductFormReceiveComponent } from './product-form/product-form-receive.component';
import { ProductFormDispatchComponent } from './product-form/product-form-dispatch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductFormCapacityComponent,
    ProductFormReceiveComponent,
    ProductFormDispatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {path: '', component: ProductFormComponent},
    {path: 'cap', component: ProductFormCapacityComponent},
    {path: 'receive', component: ProductFormReceiveComponent},
    {path: 'dispatch', component: ProductFormDispatchComponent},
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
