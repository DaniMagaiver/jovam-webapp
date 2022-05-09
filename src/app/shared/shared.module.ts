import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports:[MaterialModule, RouterModule, CommonModule, ComponentsModule, HttpClientModule]
})
export class SharedModule{

}