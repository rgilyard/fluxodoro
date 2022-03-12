import { Component, OnInit } from '@angular/core';
import { LoopTimer } from "../../models/loop-timer.model";
import { ActivatedRoute } from '@angular/router';
import { CurrentService } from '../../services/current.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  testTimer: LoopTimer;

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService) {}

  ngOnInit() {
    // Populate test timer with placeholder data
    this.testTimer = {
      timerName: "Test Timer",
      initialLength: {
        hours: 0,
        minutes: 3,
        seconds: 30,
      },
      adjustment: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      finalLength: {
        hours: 0,
        minutes: 3,
        seconds: 30,
      },
      alwaysInclude: true,
      playInterval: 0,
      vibrate: true,
      alarmSound: "/path",
      alarmVolume: 10,
      autoStart: true,
    }
  }

  ionViewWillEnter() {
    // When page is navigated to, get loop id and send it to current service.
    let loopId: any = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(loopId);
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
