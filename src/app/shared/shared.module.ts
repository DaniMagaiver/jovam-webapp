import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from "@angular/core";

@NgModule({
    exports:[MaterialModule, RouterModule, CommonModule]
})
export class SharedModule{

}