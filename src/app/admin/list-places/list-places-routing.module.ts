import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlacesPage } from './list-places.page';

const routes: Routes = [
  {
    path: '',
    component: ListPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPlacesPageRoutingModule {}
