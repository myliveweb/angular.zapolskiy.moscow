import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from '../menu/menu.module';
import { HeaderScreenComponent }   from './header-screen.component';

@NgModule({
  declarations: [
    HeaderScreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule
  ],
  exports: [ HeaderScreenComponent ]
})
export class HeaderScreenModule { }
