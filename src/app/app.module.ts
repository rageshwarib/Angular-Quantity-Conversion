import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuantityConversionComponent } from './component/quantity-conversion/quantity-conversion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportQuantityConversion } from './import.module';

@NgModule({
  declarations: [
    AppComponent,
    QuantityConversionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImportQuantityConversion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
