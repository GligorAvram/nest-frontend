import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RacerService} from "../../services/racer.service";
import {addRacer} from "../../state/actions/racer.actions";
import {CreateRacerDto} from "../../dtos/create-racer.dto";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-add-racer',
  templateUrl: './add-racer.component.html',
  styleUrls: ['./add-racer.component.css']
})
export class AddRacerComponent implements OnInit {

  addRacerForm: FormGroup;

  constructor(private readonly racerService: RacerService,
              private store: Store,
              private formBuilder: FormBuilder) {
    this.addRacerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      car: ['', [Validators.required, Validators.minLength(3)]],
      isLegal: [false, [Validators.required]]
    })
  }

  get name(): string {
    return this.addRacerForm.get('name')?.value ?? "";
  }

  get car(): string {
    return this.addRacerForm.get('car')?.value ?? "";
  }

  get isLegal(): boolean {
    return this.addRacerForm.get('isLegal')?.value ?? false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.addRacerForm.invalid) {
      this.store.dispatch(addRacer(new CreateRacerDto(this.name, this.car, this.isLegal)));
    }
  }
}
