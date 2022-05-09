import { RequisicaoResolver } from './../../shared/resolvers/requisicao.resolver';
import { RequisicoesComponent } from './requisicoes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RequisicoesComponent,
    resolve: {
      requisicoes: RequisicaoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequisicoesRoutingModule {}
