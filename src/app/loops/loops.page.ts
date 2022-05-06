import { Component, OnInit } from '@angular/core';
import { Loop } from '../models/loop.model';
import { HourMinSec } from "../models/hour-min-sec.model";
import { LoopsDataService } from "../services/loops-data/loops-data.service";

@Component({
  selector: 'app-loops',
  templateUrl: './loops.page.html',
  styleUrls: ['./loops.page.scss'],
})
export class LoopsPage implements OnInit {
  loopsData: Loop[] = new Array();

  constructor(private loopsDataService: LoopsDataService) {
  }

  ngOnInit() {
    // Get the fake user loops data
    this.loopsData = this.loopsDataService.getLoopsData();
  }
}
