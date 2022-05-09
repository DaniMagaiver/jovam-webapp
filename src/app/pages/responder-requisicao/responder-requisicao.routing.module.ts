import { RequisicaoResolver } from './../../shared/resolvers/requisicao.resolver';
import { ResponderRequisicaoComponent } from './responder-requisicao.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [{
    path: '',
    component: ResponderRequisicaoComponent,
    resolve:{
        requisicoes: RequisicaoResolver
    }
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ResponderRequisicaoRoutingModule{

}