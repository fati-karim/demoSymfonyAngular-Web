import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { IndexMembreComponent }  from './components/membre/membre.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent, IndexMembreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
