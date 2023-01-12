import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'', redirectTo:'curriculum', pathMatch:'full' },
  { path:'curriculum', component:CurriculumComponent },
  { path:'login', component:LoginComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
