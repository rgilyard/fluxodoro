import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoopPage } from './loop.page';

const routes: Routes = [
  {
    path: '',
    component: LoopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoopPageRoutingModule {}
