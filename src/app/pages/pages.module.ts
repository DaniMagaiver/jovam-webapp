import { TurmasModule } from './turmas/turmas.module';
import { EscolasModule } from './escolas/escolas.module';
import { ResponderRequisicaoModule } from './responder-requisicao/responder-requisicao.module';
import { RequisicoesModule } from './requisicoes/requisicioes.module';
import { LoginModule } from './login/login.module';
import { AtasModule } from './atas/atas.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    AtasModule,
    LoginModule,
    RequisicoesModule,
    ResponderRequisicaoModule,
    EscolasModule,
    TurmasModule,
  ],
})
export class PagesModule {}
