import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaReativaRoutingModule } from './pesquisa-reativa-routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LibSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PesquisaReativaRoutingModule
  ]
})
export class PesquisaReativaModule { }
