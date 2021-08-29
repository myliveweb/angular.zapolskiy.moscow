import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent }   from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
