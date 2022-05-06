import { EscolasComponent } from './escolas.component';
import { EscolasRoutingModule } from './escolas.routing.module';
import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [EscolasComponent],
    imports: [SharedModule ,EscolasRoutingModule],
    exports: [EscolasComponent]
})
export class EscolasModule{}