import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IOParentComponent } from './io-parent/io-parent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"service" , component:ServiceComponent},
  {path:"contact" , component:ContactComponent},
  {path:"about" , component:AboutComponent},
  {path:"buy-product" , component:ParentComponent},
  {path:"product" , component:IOParentComponent},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
