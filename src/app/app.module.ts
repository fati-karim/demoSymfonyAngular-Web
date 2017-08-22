import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { IndexMembreComponent }  from './components/membre/index-membre.component';
import { CreerMembreComponent }  from './components/membre/creer-membre.component';
import { MembreComponent }  from './components/membre/membre.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule ],
  declarations: [ AppComponent, IndexMembreComponent, CreerMembreComponent, MembreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
