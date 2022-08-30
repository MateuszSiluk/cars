import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsStateModule, HttpCarsServiceModule } from '@cars';
import { HomePage } from './home.page';
import { CarsComponentModule } from 'libs/cars/src/lib/components/cars.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    CarsComponentModule,
    CarsStateModule,
    HttpCarsServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
