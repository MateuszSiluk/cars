import { NgModule } from '@angular/core';
import { CarsState } from './cars.state';
import { GETS_ALL_SHOW_ALL_CARS_QUERY } from '../ports/primary/query/gets-all-show-all-cars.query-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [CarsState, { provide: GETS_ALL_SHOW_ALL_CARS_QUERY, useExisting: CarsState }],
  	exports: [] })
export class CarsStateModule {
}
