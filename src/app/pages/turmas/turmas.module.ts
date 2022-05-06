import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TurmasComponent } from "./turmas.component";
import { TurmasRoutingModule } from "./turmas.routing.module";

@NgModule({
    declarations: [TurmasComponent],
    imports: [SharedModule, TurmasRoutingModule],
    exports: [TurmasComponent]
})
export class TurmasModule{

}