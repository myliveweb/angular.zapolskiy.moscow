import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ PortfolioComponent ]
})
export class PortfolioModule { }
