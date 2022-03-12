// Frame holds the three tabs that a user can view- loops, timer, and stats

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePage } from './frame.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FramePage,
    children: [
      {
        path: 'loop',
        loadChildren: () => import('./loop/loop.module').then(m => m.LoopPageModule)
      },
      {
        path: 'loop/:loopId',
        loadChildren: () => import('./loop/loop.module').then(m => m.LoopPageModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
      },
      {
        path: 'stats/:loopId',
        loadChildren: () => import('./stats/stats.module').then(m => m.StatsPageModule)
      },
      {
        path: 'timer',
        loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
      },
      {
        path: 'timer/:loopId',
        loadChildren: () => import('./timer/timer.module').then(m => m.TimerPageModule)
      },
      {
        path: '',
        redirectTo: '/frame/tabs/loop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/frame/tabs/loop',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FramePageRoutingModule {}
