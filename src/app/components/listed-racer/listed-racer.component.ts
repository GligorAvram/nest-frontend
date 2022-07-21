import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
} from '@angular/core';
import {Racer} from "../../models/racer.model";

@Component({
  selector: 'app-listed-racer',
  templateUrl: './listed-racer.component.html',
  styleUrls: ['./listed-racer.component.css']
})
export class ListedRacerComponent implements OnInit {

  @Input() listedRacer: Racer | undefined;
  @Output() racerToDeleteEmitter = new EventEmitter<Racer>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteRacer(racer: Racer) {
    this.racerToDeleteEmitter.emit(racer);
  }
}
