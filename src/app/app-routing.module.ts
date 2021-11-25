import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RopaComponent } from './ropa/ropa.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  {
    path: 'ropa',
    component: RopaComponent,
  },
  {
    path: 'articulos',
    component: ArticulosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
