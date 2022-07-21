import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RacerService} from "../../services/racer.service";
import {UpdateRacerDto} from "../../dtos/update-racer.dto";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {editRacer} from "../../state/actions/racer.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-racer',
  templateUrl: './edit-racer.component.html',
  styleUrls: ['./edit-racer.component.css']
})
export class EditRacerComponent implements OnInit, OnDestroy {

  id: string = '';
  parameters: Subscription | undefined;

  editRacerForm: FormGroup;

  constructor(private readonly racerService: RacerService,
              private route: ActivatedRoute,
              private store: Store,
              private formBuilder: FormBuilder) {
    this.editRacerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      car: ['', [Validators.required, Validators.minLength(3)]],
      position: [0, [Validators.required, Validators.max(100), Validators.min(1)]],
      isLegal: [false, [Validators.required]]
    })
  }

  get name() {
    return this.editRacerForm.get('name')?.value;
  }

  get car() {
    return this.editRacerForm.get('car')?.value;
  }

  get isLegal() {
    return this.editRacerForm.get('isLegal')?.value;
  }

  get position() {
    return this.editRacerForm.get('position')?.value;
  }

  ngOnInit() {
    this.parameters = this.route.queryParams.subscribe(params => {
      this.id = params['id'];

      this.editRacerForm.setValue({
        car: params['car'],
        isLegal: params['isLegal'] ? params['isLegal'] : false,
        position: params['position'] ?? 101,
        name: params['name']
      });
    })
  }

  onSubmit() {
    if (this.editRacerForm.valid) {
      const name = this.name;
      const car = this.car;
      const position = this.position;
      const is_legal = this.isLegal;
      const racer: UpdateRacerDto = new UpdateRacerDto(this.id, name, car, position, is_legal);
      this.store.dispatch(editRacer(racer));
    }
  }

  ngOnDestroy(): void {
    this.parameters?.unsubscribe();
  }

}
