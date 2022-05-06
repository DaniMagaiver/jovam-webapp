import { AtasRoutingModule } from './atas.routing.module';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AtasComponent } from "./atas.component";

@NgModule({
    declarations:[AtasComponent],
    imports:[SharedModule, AtasRoutingModule],
    exports:[AtasComponent]
})
export class AtasModule{

}