import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllRacersComponent} from "./components/all-racers/all-racers.component";
import {EditRacerComponent} from "./components/edit-racer/edit-racer.component";
import {AddRacerComponent} from "./components/add-racer/add-racer.component";


const routes: Routes = [
  { path: '', component: AllRacersComponent },
  { path: 'editRacer', component: EditRacerComponent },
  { path: 'addRacer', component: AddRacerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
