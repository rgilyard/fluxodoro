// Frame holds the three tabs that a user can view- loops, timer, and stats

import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
  loopId: string;  // The loopId used for the tabs url to display the correct loop

  constructor() { }

  ngOnInit() {
  }

}
