import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { TurmasComponent } from './turmas.component';
import { TurmaResolver } from 'src/app/shared/resolvers/turma.resolver';

const routes:Routes = [{
    path: '',
    component: TurmasComponent,
    resolve: {
        turmas: TurmaResolver
    }
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TurmasRoutingModule{

}