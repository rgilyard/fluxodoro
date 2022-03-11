// Individual timer in a loop

import { HourMinSec } from "./hour-min-sec.model";

export class LoopTimer {
  public timerName: string; // Name of the timer
  public initialLength: HourMinSec; // The initial length of the timer
  public adjustment: HourMinSec;  // The amount of time added or subtracted from a timer each loop
  public finalLength: HourMinSec; // The length at which a timer stops adjusting
  public alwaysInclude: boolean; // True when a timer is always played in the loop
  public playInterval: number; // The interval at which a timer is included in loop
  public vibrate: boolean;  // True if the timer should vibrate when done
  public alarmSound: string; // Path to alarm sound to play when timer is done
  public alarmVolume: number; // The volume of the alarm
  public autoStart: boolean; // True when timer should start as soon as the last one ends
}
