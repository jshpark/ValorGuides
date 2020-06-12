import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentPageComponent } from './components/agent-page/agent-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MapPageCompnent } from './components/map-page/map-page.component';


const routes: Routes = [
  {path: 'agents', component: AgentPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'maps', component: MapPageCompnent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
