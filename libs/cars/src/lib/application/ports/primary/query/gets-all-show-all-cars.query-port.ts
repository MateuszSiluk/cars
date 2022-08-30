import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowAllCarsQuery } from './show-all-cars.query';

export const GETS_ALL_SHOW_ALL_CARS_QUERY =
  new InjectionToken<GetsAllShowAllCarsQueryPort>(
    'GETS_ALL_SHOW_ALL_CARS_QUERY'
  );

export interface GetsAllShowAllCarsQueryPort {
  getAllShowAllCarsQuery(): Observable<ShowAllCarsQuery[]>;
}
