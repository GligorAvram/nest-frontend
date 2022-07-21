import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RacerService} from "../../services/racer.service";
import {
  addRacer,
  addRacerSuccess,
  deleteRacer,
  deleteRacerFailure,
  deleteRacerSuccess,
  editRacer,
  editRacerSuccess,
  getRacers,
  getRacersSuccess
} from "../actions/racer.actions";
import {Router} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";
import {concatMap, exhaustMap, map, tap} from "rxjs";


@Injectable()
export class RacerEffects {
  loadRacers$ = createEffect(() => {
      return this.action$.pipe(
        ofType(getRacers),
        exhaustMap(() =>
          this.racerService.getRacers().pipe(
            map(racers => getRacersSuccess(racers))
          )
        )
      );
    }
  );
  addRacer$ = createEffect(() => {
      return this.action$.pipe(
        ofType(addRacer),
        concatMap((racer) =>
          this.racerService.addRacer(racer).pipe(
            map((racer) => addRacerSuccess(racer))
          )
        ),
        tap(() => this.router.navigate(['']))
      );
    }
  );
  editRacer$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editRacer),
      concatMap(racer =>
        this.racerService.updateRacer(racer).pipe(
          map(racer => editRacerSuccess(racer))
        )
      ),
      tap(() => this.router.navigate(['']))
    )
  })
  deleteRacer$ = createEffect(() => {
      return this.action$.pipe(
        ofType(deleteRacer),
        concatMap(racer =>
          this.racerService.deleteRacer(racer).pipe(
            map((result) => result === HttpStatusCode.Ok ? deleteRacerSuccess(racer) : deleteRacerFailure(racer)
            )
          )
        )
      );
    }
  );

  constructor(private action$: Actions, private racerService: RacerService, private router: Router) {
  }
}
