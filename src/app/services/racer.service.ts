import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Racer} from "../models/racer.model";
import {UpdateRacerDto} from "../dtos/update-racer.dto";
import {CreateRacerDto} from "../dtos/create-racer.dto";


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RacerService {

  constructor(private readonly http: HttpClient) {
  }

  getRacers(): Observable<Racer[]> {
    return this.http.get<Racer[]>(environment.api + "/racer")
  }

  updateRacer(racer: UpdateRacerDto): Observable<Racer> {
    let url = environment.api + `/racer/${racer.id}`
    return this.http.patch<Racer>(url, racer, httpOptions).pipe(map(data => data))
  }

  addRacer(racer: CreateRacerDto): Observable<Racer> {
    return this.http.post<Racer>(environment.api + "/racer", JSON.stringify(racer), httpOptions);
  }

  deleteRacer($racer: Racer): Observable<HttpStatusCode> {
    const id = $racer.id;
    // return this.http.delete<HttpStatusCode>(environment.api + `/racer/${id}`);
    return this.http.delete<HttpStatusCode>(environment.api + `/racer/99999`);
  }
}
