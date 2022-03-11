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
        path: 'loops',
        loadChildren: () => import('./loops/loops.module').then( m => m.LoopsPageModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
      },
      {
        path: 'timer',
        loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
      },
      {
        path: '',
        redirectTo: '/frame/tabs/loops',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/frame/tabs/loops',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FramePageRoutingModule {}
