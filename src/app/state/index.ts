import * as fromRacers from '../state/reducers/racer.reducer'
import {ActionReducerMap} from "@ngrx/store";


export interface State {
  [fromRacers.racerFeatureKey]: fromRacers.RacerState;
}

export const reducers: ActionReducerMap<State> = {
  [fromRacers.racerFeatureKey]: fromRacers.racerReducer
}
