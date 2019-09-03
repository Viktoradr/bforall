import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pesquisa' },
  { path: 'home', component: HomeComponent },
  { path: 'pesquisa', loadChildren: () => import('./pesquisa-reativa/pesquisa-reativa.module').then(m => m.PesquisaReativaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
