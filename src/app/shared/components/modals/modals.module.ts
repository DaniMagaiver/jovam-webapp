import { MessageComponent } from './message-modal/message.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[MessageComponent],
    imports: [MaterialModule, CommonModule],
    exports: [MessageComponent]
})
export class ModalsModule{

}