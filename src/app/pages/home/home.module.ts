import { LayoutModule } from './../../layout/layout.module';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, LayoutModule],
  exports: [],
})
export class HomeModule {}
