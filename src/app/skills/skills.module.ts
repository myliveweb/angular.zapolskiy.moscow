import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ SkillsComponent ]
})
export class SkillsModule { }
