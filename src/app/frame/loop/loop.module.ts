import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopPageRoutingModule } from './loop-routing.module';

import { LoopPage } from './loop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoopPageRoutingModule
  ],
  declarations: [LoopPage]
})
export class LoopPageModule {}
