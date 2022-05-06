// The timer page displays the currently running timer and allows the user to start and stop the timer

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TimerPageRoutingModule } from './timer-routing.module';
import { TimerPage } from './timer.page';
import { TimeComponent } from './timer-components/time/time.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerPageRoutingModule
  ],
  declarations: [
    TimerPage,
    TimeComponent
  ]
})
export class TimerPageModule {

}
