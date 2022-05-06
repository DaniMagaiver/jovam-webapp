import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { TurmasComponent } from './turmas.component';

const routes:Routes = [{
    path: '',
    component: TurmasComponent
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TurmasRoutingModule{

}