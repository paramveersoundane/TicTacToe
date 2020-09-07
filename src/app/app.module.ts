import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';

@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    Player2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }