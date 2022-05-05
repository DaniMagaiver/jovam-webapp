import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations:[LayoutComponent, SideBarComponent, HeaderComponent],
    imports:[SharedModule],
    exports:[LayoutComponent, SideBarComponent, HeaderComponent]
})
export class LayoutModule{

}