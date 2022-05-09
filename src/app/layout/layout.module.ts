import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations:[LayoutComponent,  HeaderComponent],
    imports:[SharedModule],
    exports:[LayoutComponent, HeaderComponent]
})
export class LayoutModule{

}