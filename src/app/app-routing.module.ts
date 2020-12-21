import { ParentComponent } from './parent/parent.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  // {path:"", redirectTo:'login',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"products",component:ProductsComponent},
  {path:"contact",component:ContactComponent},
  {path:"buy-products", component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  



exports: [RouterModule]
})
export class AppRoutingModule { }
