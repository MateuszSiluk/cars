import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllShowAllCarsQueryPort } from '../ports/primary/query/gets-all-show-all-cars.query-port';
import {
  GETS_ALL_CAR_DTO,
  GetsAllCarDtoPort,
} from '../ports/secondary/dto/gets-all-car.dto-port';
import { ShowAllCarsQuery } from '../ports/primary/query/show-all-cars.query';
import { CarDTO } from '../ports/secondary/dto/car.dto';

@Injectable()
export class CarsState implements GetsAllShowAllCarsQueryPort {
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
}
