import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
