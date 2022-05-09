import { SecretariasResolver } from './../../shared/resolvers/secretarias.resolver';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { EscolasComponent } from './escolas.component';

const routes:Routes = [{
    path: '',
    component: EscolasComponent,
    resolve: {
        secretarias: SecretariasResolver
    }
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EscolasRoutingModule{
    
}