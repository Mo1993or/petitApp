import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TacheComponent } from './Components/tache/tache.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tache", component: TacheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
