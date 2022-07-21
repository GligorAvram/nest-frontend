import {Racer} from "../../models/racer.model";
import {createReducer, on} from "@ngrx/store";
import {
  addRacerSuccess,
  deleteRacerFailure,
  deleteRacerSuccess,
  editRacerSuccess,
  getRacersSuccess
} from "../actions/racer.actions";


export interface RacerState {
  showLoading: boolean;
  racers: ReadonlyArray<Racer>;
  errors: string;
}

const initialState: RacerState = {
  showLoading: false,
  racers: [],
  errors: ''
}

export const racerReducer = createReducer(initialState.racers,
  on(getRacersSuccess, (state, {racers}) => (racers)),
  on(addRacerSuccess, (state, racer) => ([...state, racer])),
  on(deleteRacerSuccess, (state, racer) => (state.filter(r => r.id != racer.id))),
  on(deleteRacerFailure, (state, racer) => (state)),
  on(editRacerSuccess, (state, racer) => {
      const newState: Racer[] = [];
      state.forEach(r => {
        if (r.id == racer.id) {
          newState.push({
            id: racer.id,
            name: racer.name,
            car: racer.car,
            position: racer.position,
            is_legal: racer.is_legal
          })
        } else {
          newState.push(r);
        }
      })
    return newState;
    }
  )
)

