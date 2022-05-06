import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    component: LayoutComponent,
    children:[
      {
        path: 'atas',
        loadChildren: () => import('./pages/atas/atas.module').then((m) => m.AtasModule),
      },
      {
        path: 'escolas',
        loadChildren: () => import('./pages/escolas/escolas.module').then(m => m.EscolasModule)
      },
      {
        path: 'turmas',
        loadChildren: () => import('./pages/turmas/turmas.module').then(m => m.TurmasModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
