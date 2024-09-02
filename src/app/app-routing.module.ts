import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';


const routes: Routes = [
  {path: "/",component: MycomponentsComponent},
  {path:'/about',component:AboutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
