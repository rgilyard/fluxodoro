import { Injectable } from '@angular/core';
import { Loop } from '../models/loop.model';
import { LoopTimer } from '../models/loop-timer.model';
import { HourMinSec } from "../models/hour-min-sec.model";

@Injectable({
  providedIn: 'root'
})
export class LoopsDataService {
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

  /*
  * The getLoopsData function returns a user's loops and timers settings.
  *
  * This is used in the Loops Page.
  * */
  getLoopsData() {
    return this.loopsData;
  }

  /*
  * The getLoop functions returns the loop data given a title string
  * */
  getLoop(loopName: string) {
    for (const loop of this.loopsData) {
      if (loop.loopName === loopName) {
        return loop;
      }
    }
  }

  addLoop() {
    // This is interesting. I'll have to figure out forms and stuff or start with a template
  }

  /*
  * The getTimer function returns a Timer Data object given the loop's string name and timer index
  * */
  getTimer(loopName: string, timerIndex: number) {
    for (const loop of this.loopsData) {
      if (loop.loopName === loopName) {
        return loop.timerList[timerIndex];
      }
    }
  }

  addTimer() {
    // I'll have to start with a blank timer or something and let people change the settings after naming it
  }

  toMilliseconds(time: HourMinSec) {
    // Converts a timer with hourMinSec model to milliseconds
    let timeInMilliseconds: number;
    timeInMilliseconds = (time.seconds * 1000) + (time.minutes * 60000) + (time.hours * 3600000);
    return timeInMilliseconds;
  }
}
