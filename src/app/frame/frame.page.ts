// Frame holds the three tabs that a user can view- loops, timer, and stats

import { Component, OnInit, Output } from '@angular/core';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
  loopId: string;  // The loopId used for the tabs url to display the correct loop
  timerIndex: number;

  constructor(private currentService: CurrentService) { }

  ngOnInit() {
    // this.activatedRoute.params
    //       .subscribe(url => console.log('The URL changed to: ' + url));
  }

  //
  ionViewDidEnter() {
    // Get loopId and timerId from Current Service. This was just set from the last navigation
    this.loopId = this.currentService.getLoopId();
    this.timerIndex = this.currentService.getTimerIndex();
  }

  switchTab() {
  }

}
