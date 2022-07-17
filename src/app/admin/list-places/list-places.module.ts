import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPlacesPageRoutingModule } from './list-places-routing.module';

import { ListPlacesPage } from './list-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPlacesPageRoutingModule
  ],
  declarations: [ListPlacesPage]
})
export class ListPlacesPageModule {}
