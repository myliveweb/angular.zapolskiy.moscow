import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CalltoactionComponent } from './calltoaction.component';

@NgModule({
  declarations: [
    CalltoactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ CalltoactionComponent ]
})
export class CalltoactionModule { }
