// Loop - a routine of timers

import { LoopTimer } from "./loop-timer.model";

export class Loop {
  public loopName: string;  // Name of loop
  public timerList: LoopTimer[] = []  // List of timers
  public currentTimer: LoopTimer; // Current timer playing
}
