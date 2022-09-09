import { Inject, Injectable } from '@angular/core';
import { mergeMap, Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllShowAllCarsQueryPort } from '../ports/primary/query/gets-all-show-all-cars.query-port';
import { TotalCostQueryPort } from '../ports/primary/query/total-cost.query-port';
import {
  GETS_ALL_CAR_DTO,
  GetsAllCarDtoPort,
} from '../ports/secondary/dto/gets-all-car.dto-port';
import { ShowAllCarsQuery } from '../ports/primary/query/show-all-cars.query';
import { CarDTO } from '../ports/secondary/dto/car.dto';
import { TotalCostQuery } from '../ports/primary/query/total-cost.query';

@Injectable()
export class CarsState
  implements GetsAllShowAllCarsQueryPort, TotalCostQueryPort
{
  constructor(
    @Inject(GETS_ALL_CAR_DTO) private _getsAllCarDto: GetsAllCarDtoPort
  ) {}

  getAllShowAllCarsQuery(): Observable<ShowAllCarsQuery[]> {
    return this._getsAllCarDto
      .getAll()
      .pipe(
        map((carDTOs: CarDTO[]): ShowAllCarsQuery[] =>
          carDTOs.map(
            (car) =>
              new ShowAllCarsQuery(
                car.id,
                car.model,
                car.plate,
                car.deliveryDate,
                car.deadline,
                car.client.firstName,
                car.client.surname,
                car.cost,
                car.isFullyDamaged
              )
          )
        )
      );
  }

  totalCost(): Observable<TotalCostQuery> {
    return this._getsAllCarDto
      .getAll()
      .pipe(
        map((car) =>
          car.map((car: CarDTO) => car.cost).reduce((prev, next) => prev + next)
        )
      )
      .pipe(map((total) => new TotalCostQuery(total)));
  }
}
