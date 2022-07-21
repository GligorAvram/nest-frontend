import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromRacer from "../reducers/racer.reducer";
import {RacerState} from "../reducers/racer.reducer";

export const selectRacerState = createFeatureSelector<fromRacer.RacerState>(
  fromRacer.racerFeatureKey
)


export const racerSelector = createSelector(
  selectRacerState,
  (state: RacerState) => state.racers.list
);

export const racerErrorSelector = createSelector(
  selectRacerState,
  (state) => state.racers.errors
)
