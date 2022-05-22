import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntComponent } from './int/int.component';
import { GithubComponent } from './github/github.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent
  },
  {
    path:'int',
    component:IntComponent
  },
  {
    path:'github',
    component:GithubComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path: 'cv',
    component:CvComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
