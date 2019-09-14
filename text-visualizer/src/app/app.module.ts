import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TextBoxComponent } from './text-box/text-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { ImagesComponent } from './images/images.component';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextBoxComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
