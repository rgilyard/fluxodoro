import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopsPageRoutingModule } from './loops-routing.module';

import { LoopsPage } from './loops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoopsPageRoutingModule
  ],
  declarations: [LoopsPage]
})
export class LoopsPageModule {}
