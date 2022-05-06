/*
* Copied from here:
* https://javascript.plainenglish.io/implement-a-countdown-timer-with-rxjs-in-angular-3852f21a4ea0
* */

import { Component, Input, OnInit } from '@angular/core';
import { LoopTimer } from '../../../../models/loop-timer.model';
import { interval, Subscription } from 'rxjs';
import { LoopsDataService } from '../../../../services/loops-data/loops-data.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  @Input() timer: LoopTimer;
  // Should this be in milliseconds?
  timeLeft;
  // Toggle between start and stop
  startButton = true;
  isLoaded = false;

  private subscription: Subscription;

  public endTime: any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToEndTime;
  public minutesToEndTime;
  public hoursToEndTime;

  constructor(private loopsDataService: LoopsDataService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    // @ts-ignore
    if (typeof this.timer !== 'undefined') {
      this.timeLeft = this.loopsDataService.toMilliseconds(this.timer.initialLength);
      // When timer info is populated, display timer
      this.secondsToEndTime = this.timer.initialLength.seconds;
      this.minutesToEndTime = this.timer.initialLength.minutes;
      this.hoursToEndTime = this.timer.initialLength.hours;
      this.isLoaded = true;
    }
  }

  private getTimeDifference() {
    this.timeDifference = this.endTime - Date.now();
    if (this.timeDifference <= 1000) {
      this.endTimer();
    }
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToEndTime = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToEndTime = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour)
      % this.SecondsInAMinute);
    this.hoursToEndTime = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour *
      this.SecondsInAMinute) % this.hoursInADay);
  }

  saveTimeLeft() {
    this.timeLeft = ((this.hoursToEndTime * 60 + this.minutesToEndTime) * 60 + this.secondsToEndTime) * 1000;
  }

  startTimer() {
    // Give end time current date plus time in milliseconds (+ 100 millis to give the timer time to show the first count)
    this.endTime = Date.now() + this.timeLeft + 20;
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
    this.startButton = false;
  }

  stopTimer() {
    // Unsubscribe
    this.subscription.unsubscribe();
    this.saveTimeLeft();
    this.startButton = true;
  }

  endTimer() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
