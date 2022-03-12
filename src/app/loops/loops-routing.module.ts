import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoopsPage } from './loops.page';

const routes: Routes = [
  {
    path: '',
    component: LoopsPage
  },
  {
    path: 'loop',
    loadChildren: () => import('../frame/loop/loop.module').then(m => m.LoopPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoopsPageRoutingModule {}
