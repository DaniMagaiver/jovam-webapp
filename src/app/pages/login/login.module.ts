import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations:[LoginComponent],
    imports: [SharedModule, LoginRoutingModule],
    exports:[]
})
export class LoginModule{

}