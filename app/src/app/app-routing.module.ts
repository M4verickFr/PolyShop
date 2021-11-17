import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shops',
    pathMatch: 'full'
  },
  {
    path: 'shops',
    loadChildren: () => import('./shops/shops.module').then( m => m.ShopsPageModule)
  },
  {
    path: 'shop/add',
    loadChildren: () => import('./shop/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'shop/:id',
    loadChildren: () => import('./shop/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'shop/:id/update',
    loadChildren: () => import('./shop/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'shop/:id/add',
    loadChildren: () => import('./category/add/add.module').then( m => m.AddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
