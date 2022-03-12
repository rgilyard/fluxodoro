import { Component, OnInit } from '@angular/core';
import { Loop } from '../models/loop.model';
import {HourMinSec} from "../models/hour-min-sec.model";


@Component({
  selector: 'app-loops',
  templateUrl: './loops.page.html',
  styleUrls: ['./loops.page.scss'],
})
export class LoopsPage implements OnInit {
  loopsData: Loop[] = new Array();

  constructor() {
    // Add fake data to test display. Two loops with two timers each.
    this.loopsData = [{
      loopName: "Homework",
      timerList: [{
        timerName: "Math",
        initialLength: {
          hours: 0,
          minutes: 1,
          seconds: 30
        },
        adjustment: {
          hours: 0,
          minutes: 0,
          seconds: 15
        },
        finalLength: {
          hours: 0,
          minutes: 1,
          seconds: 0
        },
        alwaysInclude: true,
        playInterval: 0,
        vibrate: true,
        alarmSound: "sound",
        alarmVolume: 15,
        autoStart: false
      },
      {
        timerName: "Break",
        initialLength: {
          hours: 0,
          minutes: 1,
          seconds: 30
        },
        adjustment: {
          hours: 0,
          minutes: 0,
          seconds: 15
        },
        finalLength: {
          hours: 0,
          minutes: 1,
          seconds: 0
        },
        alwaysInclude: true,
        playInterval: 0,
        vibrate: true,
        alarmSound: "sound",
        alarmVolume: 15,
        autoStart: false
      }],
      currentTimerIndex: 0
    },
    {
      loopName: "Chores",
      timerList: [{
        timerName: "Clean",
        initialLength: {
          hours: 0,
          minutes: 1,
          seconds: 30
        },
        adjustment: {
          hours: 0,
          minutes: 0,
          seconds: 15
        },
        finalLength: {
          hours: 0,
          minutes: 1,
          seconds: 0
        },
        alwaysInclude: true,
        playInterval: 0,
        vibrate: true,
        alarmSound: "sound",
        alarmVolume: 15,
        autoStart: false
      },
      {
        timerName: "Break",
        initialLength: {
          hours: 0,
          minutes: 1,
          seconds: 30
        },
        adjustment: {
          hours: 0,
          minutes: 0,
          seconds: 15
        },
        finalLength: {
          hours: 0,
          minutes: 1,
          seconds: 0
        },
        alwaysInclude: true,
        playInterval: 0,
        vibrate: true,
        alarmSound: "sound",
        alarmVolume: 15,
        autoStart: false
      }],
      currentTimerIndex: 0
    }]
  }

  ngOnInit() {
  }

}
