import {createAction} from "@ngrx/store";
import {Racer} from "../../models/racer.model";
import {CreateRacerDto} from "../../dtos/create-racer.dto";
import {UpdateRacerDto} from "../../dtos/update-racer.dto";


export const getRacers = createAction('[RACER] Get racers');
export const getRacersSuccess = createAction('[RACER] Get racers success', (racers: ReadonlyArray<Racer>) => ({racers}));

export const addRacer = createAction('[RACER] Add racer', (racer: CreateRacerDto) => (racer));
export const addRacerSuccess = createAction('[RACER] Add racer success', (racer: Racer) => (racer));

export const deleteRacer = createAction('[RACER] Delete racer', (racer: Racer) => (racer));
export const deleteRacerSuccess = createAction('[RACER] Delete racer success', (racer: Racer) => (racer));
export const deleteRacerFailure = createAction('[RACER] Delete racer failure', (racer: Racer) => (racer));

export const editRacer = createAction('[RACER] Edit racer', (racer: UpdateRacerDto) => (racer));
export const editRacerSuccess = createAction('[RACER] Edit racer success', (racer: Racer) => (racer));

