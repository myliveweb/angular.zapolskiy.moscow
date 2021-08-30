import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FirstScreenModule }   from './first-screen/first-screen.module';
import { HeaderScreenModule } from './header-screen/header-screen.module';
import { MenuModule } from './menu/menu.module';
import { ServicesModule } from './services/services.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';

import { AppComponent }   from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FirstScreenModule,
    HeaderScreenModule,
    MenuModule,
    ServicesModule,
    PortfolioModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
