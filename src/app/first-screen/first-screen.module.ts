import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FirstScreenComponent }   from './first-screen.component';
import { VideoComponent } from '../video/video.component';

@NgModule({
  declarations: [
    FirstScreenComponent,
    VideoComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ FirstScreenComponent ]       // экспортируем компонент
})
export class FirstScreenModule { }
