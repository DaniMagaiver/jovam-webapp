import { LoginModule } from './login/login.module';
import { AtasModule } from './atas/atas.module';
import { NgModule } from "@angular/core";

@NgModule({
    exports:[AtasModule, LoginModule]
})
export class PagesModule{

}