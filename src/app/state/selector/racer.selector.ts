import {createSelector} from "@ngrx/store";
import {RacerState} from "../reducers/racer.reducer";
import {Racer} from "../../models/racer.model";

export const racerSelector = createSelector(
  (state: RacerState) => state.racers,
  (racers: ReadonlyArray<Racer>) => racers,
);

export const errorSelector = createSelector(
  (state: RacerState) => state.errors,
  (errors: string) => errors
)
