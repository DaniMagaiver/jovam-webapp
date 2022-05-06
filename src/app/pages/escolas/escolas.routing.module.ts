import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { EscolasComponent } from './escolas.component';

const routes:Routes = [{
    path: '',
    component: EscolasComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EscolasRoutingModule{
    
}