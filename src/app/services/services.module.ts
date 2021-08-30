import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ ServicesComponent ]
})
export class ServicesModule { }
