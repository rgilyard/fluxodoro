import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTimerPage } from './edit-timer.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTimerPageRoutingModule {}
