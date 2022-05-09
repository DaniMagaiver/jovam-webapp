import { AtasComponent } from './atas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtaResolver } from 'src/app/shared/resolvers/ata.resolver';

const routes: Routes = [
  {
    path: '',
    component: AtasComponent,
    resolve: { atas: AtaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtasRoutingModule {}
