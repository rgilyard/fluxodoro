import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTimerPageRoutingModule } from './edit-timer-routing.module';

import { EditTimerPage } from './edit-timer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTimerPageRoutingModule
  ],
  declarations: [EditTimerPage]
})
export class EditTimerPageModule {}
