import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentService } from '../../services/current/current.service';
import { LoopsDataService } from '../../services/loops-data/loops-data.service';
import { Loop } from "../../models/loop.model";

@Component({
  selector: 'app-loop',
  templateUrl: './loop.page.html',
  styleUrls: ['./loop.page.scss'],
})
export class LoopPage implements OnInit {
  loopId: string;
  currentLoop: Loop;

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService,
              private loopsDataService: LoopsDataService) { }

  ngOnInit() {
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.currentLoop = this.loopsDataService.getLoop(this.loopId);
  }

  ionViewWillEnter() {
    // When page is navigated to, get loop id and send it to current service.
    this.loopId = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(this.loopId);
  }

}
