import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';
import { TitleCasePipe } from './pipes/my-titlecase.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguagesComponent } from './components/languages/languages.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}



@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    MyCurrencyPipe,
    MyDatePipe,
    TitleCasePipe,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
