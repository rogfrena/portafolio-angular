import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const app_Routes: Routes = [

    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'iteme', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
