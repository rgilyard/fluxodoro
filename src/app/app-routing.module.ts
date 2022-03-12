import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loops',
    pathMatch: 'full'
  },
  {
    path: 'loops',
    loadChildren: () => import('./loops/loops.module').then( m => m.LoopsPageModule)
  },
  {
    path: 'frame',
    loadChildren: () => import('./frame/frame.module').then( m => m.FramePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
