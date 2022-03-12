import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
  currentLoopData: Observable<string>;
  loopId: string = '';
  timerId: string = '';

  constructor() {
  }

  setLoopId(newLoopId: string) {
    this.loopId = newLoopId;
  }

  setTimerId(newTimerId: string) {
    this.timerId = newTimerId;
  }

  getLoopId() {
    return this.loopId;
  }

  getTimerId() {
    return this.timerId;
  }
}
