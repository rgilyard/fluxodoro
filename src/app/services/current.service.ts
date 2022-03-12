import { Injectable } from '@angular/core';
// import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
  // currentLoopData: Observable<string>;
  loopId: string = '';
  timerIndex: number = 0;

  constructor() {
  }

  setLoopId(newLoopId: string) {
    this.loopId = newLoopId;
  }

  setTimerId(newTimerIndex: number) {
    this.timerIndex = newTimerIndex;
  }

  getLoopId() {
    return this.loopId;
  }

  getTimerIndex() {
    return this.timerIndex;
  }
}
