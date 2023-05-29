import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './resume/about-me/about-me.component';
import { WorkExperienceComponent } from './resume/work-experience/work-experience.component';
import { CompanyLinksComponent } from './resume/company-links/company-links.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { EducationComponent } from './resume/education/education.component';
import { CertificationsComponent } from './resume/certifications/certifications.component';
import { FooterComponent } from './resume/footer/footer.component';
import { MenuComponent } from './resume/menu/menu.component';
import { HomeComponent } from './resume/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    CompanyLinksComponent,
    SkillsComponent,
    LanguagesComponent,
    EducationComponent,
    CertificationsComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
