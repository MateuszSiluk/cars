import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDTO } from './car.dto';

export const GETS_ALL_CAR_DTO = new InjectionToken<GetsAllCarDtoPort>(
  'GETS_ALL_CAR_DTO'
);

export interface GetsAllCarDtoPort {
  getAll(): Observable<CarDTO[]>;
}
