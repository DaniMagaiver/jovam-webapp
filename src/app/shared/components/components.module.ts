import { ModalsModule } from './modals/modals.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [MaterialModule, RouterModule, CommonModule, ModalsModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent]
})
export class ComponentsModule{

}