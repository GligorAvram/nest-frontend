import {Component, OnInit} from '@angular/core';
import {RacerService} from "../../services/racer.service";
import {Racer} from "../../models/racer.model";
import {deleteRacer, getRacers} from "../../state/actions/racer.actions";
import {Store} from "@ngrx/store";
import {racerErrorSelector, racerSelector} from "../../state/selector/racer.selector";
import {RacerState} from "../../state/reducers/racer.reducer";

@Component({
  selector: 'app-all-racers',
  templateUrl: './all-racers.component.html',
  styleUrls: ['./all-racers.component.css']
})
export class AllRacersComponent implements OnInit {
  racers$ = this.store.select(racerSelector)
  errors$ = this.store.select(racerErrorSelector);

  constructor(private readonly racerService: RacerService, private store: Store<RacerState>) {
  }

  ngOnInit(): void {
    this.loadRacers();
  }

  loadRacers(): void {
    this.store.dispatch(getRacers());
  };

  deleteRacer(racer: Racer) {
    this.store.dispatch(deleteRacer(racer));
  }
}
