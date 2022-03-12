import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentService } from '../../services/current.service';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.page.html',
  styleUrls: ['./loop.page.scss'],
})
export class LoopPage implements OnInit {
  // @Output() emitLoopId = new EventEmitter<string>(); // The id to be appended to the tab urls to keep the correct loop displayed

  constructor(private activatedRoute: ActivatedRoute, private currentService: CurrentService) { }

  ngOnInit() {
    // Send loopId to Frame Page, so it can be used for the other tabs' urls.
    // let loopId: any = this.activatedRoute.snapshot.params.loopId;
    // this.emitLoopId.emit(loopId);
  }

  ionViewWillEnter() {
    // When page is navigated to, get loop id and send it to current service.
    let loopId: any = this.activatedRoute.snapshot.params.loopId;
    this.currentService.setLoopId(loopId);
  }

}
