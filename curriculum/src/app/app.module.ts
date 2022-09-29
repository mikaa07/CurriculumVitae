import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { EducationListComponent } from './education-list/education-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { CurriculumComponent } from './curriculum/curriculum.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ExperienceListComponent,
    EducationListComponent,
    SkillsListComponent,
    ProjectsListComponent,
    LoginComponent,
    CurriculumListComponent,
    CurriculumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
