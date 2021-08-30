import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ ContactComponent ]
})
export class ContactModule { }
