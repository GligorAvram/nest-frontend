import {Racer} from "../../models/racer.model";
import {createReducer, on} from "@ngrx/store";
import {
  addRacerSuccess,
  deleteRacerFailure,
  deleteRacerSuccess,
  editRacerSuccess,
  getRacersSuccess
} from "../actions/racer.actions";

export const racerFeatureKey = 'racer'

export interface RacerState {
  showLoading: boolean;
  errors: string;
  racers: {
    showLoading: boolean;
    list: ReadonlyArray<Racer>;
    errors: string;
  };
}

const initialState: RacerState = {
  showLoading: false,
  racers: {
    showLoading: false,
    list: [],
    errors: ''
  },
  errors: ''
}

export const racerReducer = createReducer(initialState,
  on(getRacersSuccess, (state, {data}) => (
    {
      ...state,
      racers: {
        ...state.racers,
        list: data
      }
    }
  )),
  on(addRacerSuccess, (state, data) => (
    {
      ...state,
      racers: {
        ...state,
        list: [...state.racers.list, data]
      }
    }
  )),
  on(deleteRacerSuccess, (state, data) => (
    {
      ...state,
      racers: {
        ...state,
        list: state.racers.list.filter(r => r.id != data.id)
      }
    }
  )),
  on(deleteRacerFailure, (state, data) => (
    {
      ...state,
      racers: {
        ...state.racers,
        errors: "error " + data.id
      }
    })),
  on(editRacerSuccess, (state, racer) => {
      const newState: Racer[] = [];
      state.racers.list.forEach(r => {
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

      return {
        ...state,
        racers: {
          ...state.racers,
          list: newState
        }
      }
    }
  )
)

