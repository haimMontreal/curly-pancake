import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CounterComponent } from './views/counter/counter.component';
import {DisplayDadComponent} from './views/display-dad/display-dad.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'random', component: DisplayDadComponent},
  {path: 'random/:name', component: DisplayDadComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
