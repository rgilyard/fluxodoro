import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerPage } from './timer.page';

const routes: Routes = [
  {
    path: '',
    component: TimerPage
  },
  {
    path: 'edit-timer',
    loadChildren: () => import('./edit-timer/edit-timer.module').then( m => m.EditTimerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerPageRoutingModule {}
