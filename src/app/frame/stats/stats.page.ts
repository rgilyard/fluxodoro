import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CurrentService } from "../../services/current.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // When page is navigated to, get loop id and send it to current service.
    let loopId: any = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(loopId);
  }
}
