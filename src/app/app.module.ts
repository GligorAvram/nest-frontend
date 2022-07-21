import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AllRacersComponent} from './components/all-racers/all-racers.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ListedRacerComponent} from './components/listed-racer/listed-racer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {EditRacerComponent} from "./components/edit-racer/edit-racer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AddRacerComponent} from './components/add-racer/add-racer.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {RacerEffects} from "./state/effects/racer.effects";
import {NgEventBus} from "ng-event-bus";
import {reducers} from "./state";


@NgModule({
  declarations: [
    AppComponent,
    AllRacersComponent,
    NavbarComponent,
    ListedRacerComponent,
    EditRacerComponent,
    AddRacerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([RacerEffects])
  ],
  providers: [NgEventBus],
  bootstrap: [AppComponent]
})

export class AppModule {
}
