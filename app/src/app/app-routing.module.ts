import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
    path: 'shop/:id/add',
    loadChildren: () => import('./category/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'shop/:id/update',
    loadChildren: () => import('./shop/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'category/:id/add',
    loadChildren: () => import('./product/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'category/:id/update',
    loadChildren: () => import('./category/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./product/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'product/:id/update',
    loadChildren: () => import('./product/update/update.module').then( m => m.UpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
