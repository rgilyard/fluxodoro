import { Component, OnInit } from '@angular/core';
import { LoopTimer } from "../../models/loop-timer.model";
import { ActivatedRoute } from '@angular/router';
import { CurrentService } from '../../services/current.service';
import {LoopsDataService} from "../../services/loops-data.service";
import { Loop } from "../../models/loop.model";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  loopId: string;
  timerIndex: number;
  currentLoop: Loop;
  currentTimer: LoopTimer;

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService,
              private loopsDataService: LoopsDataService) {}

  ngOnInit() {
    // Populate data from params
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.timerIndex = this.activatedRoute.snapshot.params.timerIndex;
    // this.currentLoop = this.loopsDataService.getLoop(this.loopId);
  }

  ionViewWillEnter() {
    // When page is navigated to, get loop id and send it to current service.
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(this.loopId);
    this.timerIndex = this.activatedRoute.snapshot.params.timerIndex;
    this.currentService.setTimerIndex(this.timerIndex);
  }

  ionViewDidEnter() {
    // let start = Date.now();
    // setInterval(function() {
    //   let delta = Date.now() - start; // milliseconds elapsed since start
    //   console.log(Math.floor(delta / 1000)); // in seconds
    //   // alternatively just show wall clock time:
    //   // output(new Date().toUTCString());
    // }, 1000);
  }

  startTimer() {
    console.log("Test");
    // let seconds = 0;
    // setInterval(function() {
    //   console.log(seconds);
    //   seconds++;
    // }, 1000);

    let intervalId = null;
    let varCounter = 30;
    let varName = function() {
      if(varCounter >= 0) {
        console.log(varCounter);
        varCounter--;
      } else {
        clearInterval(intervalId);
      }
    };
    intervalId = setInterval(varName, 1000);
  }
}
