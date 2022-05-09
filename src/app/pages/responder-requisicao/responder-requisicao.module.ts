import { ResponderRequisicaoRoutingModule } from './responder-requisicao.routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ResponderRequisicaoComponent } from './responder-requisicao.component';

@NgModule({
  declarations: [ResponderRequisicaoComponent],
  imports: [SharedModule, ResponderRequisicaoRoutingModule],
  exports: [ResponderRequisicaoComponent],
})
export class ResponderRequisicaoModule {}
