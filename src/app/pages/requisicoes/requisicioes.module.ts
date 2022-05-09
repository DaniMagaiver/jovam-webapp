import { RequisicoesComponent } from './requisicoes.component';
import { RequisicoesRoutingModule } from './requisicoes.routing.module';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations:[RequisicoesComponent],
    imports: [SharedModule, RequisicoesRoutingModule],
    exports: [RequisicoesComponent]
})
export class RequisicoesModule{

}