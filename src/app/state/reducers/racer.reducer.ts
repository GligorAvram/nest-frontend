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

export const racerReducer = createReducer(initialState,
  on(getRacersSuccess, (state, {racers}) => {
    return {showLoading: false, racers: [...racers], errors: ''}
  }),
  on(addRacerSuccess, (state, racer) => ({showLoading: false, racers: [...state.racers, racer], errors: ''})),
  on(deleteRacerSuccess, (state, racer) => ({
    showLoading: false,
    racers: state.racers.filter(r => r.id != racer.id),
    errors: ''
  })),
  on(deleteRacerFailure, (state, racer) => ({showLoading: false, racers: state.racers, errors: "error"})),
  on(editRacerSuccess, (state, racer) => {
      const newState: Racer[] = [];
      state.racers.forEach(r => {
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
      return {showLoading: false, racers: newState, errors: "error"};
    }
  )
)

