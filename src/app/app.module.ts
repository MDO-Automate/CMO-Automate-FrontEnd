import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    HeaderComponent,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    SliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
