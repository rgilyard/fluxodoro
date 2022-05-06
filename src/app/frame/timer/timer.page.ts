import { Component, OnInit } from '@angular/core';
import { LoopTimer } from '../../models/loop-timer.model';
import { ActivatedRoute } from '@angular/router';
import { CurrentService } from '../../services/current/current.service';
import { LoopsDataService } from '../../services/loops-data/loops-data.service';
import { Loop } from '../../models/loop.model';
import { TimerService } from '../../services/timer/timer.service';

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
  timeInMilli: number;

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService,
              private loopsDataService: LoopsDataService, private timerService: TimerService) {}

  ngOnInit() {
    // Populate data from params
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.timerIndex = this.activatedRoute.snapshot.params.timerIndex;
  }

  async ionViewWillEnter() {
    // Set the current Loop and LoopTimer
    this.currentLoop = this.loopsDataService.getLoop(this.loopId);
    this.currentTimer = this.loopsDataService.getTimer(this.loopId, this.timerIndex);

    // When page is navigated to, get loop id and send it to current service.
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(this.loopId);
    this.timerIndex = this.activatedRoute.snapshot.params.timerIndex;
    this.currentService.setTimerIndex(this.timerIndex);
  }

  ionViewDidEnter() {
  }
}
