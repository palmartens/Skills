import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ClassifyPipe } from './classify.pipe';
import { YesnoPipe } from './yesno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassifyPipe,
    ProductComponent,
    YesnoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
