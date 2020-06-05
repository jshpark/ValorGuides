import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentPageComponent } from './components/agent-page/agent-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path: 'agents', component: AgentPageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
