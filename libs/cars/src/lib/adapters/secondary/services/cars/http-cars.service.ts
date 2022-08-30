import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetsAllCarDtoPort } from '../../../../application/ports/secondary/dto/gets-all-car.dto-port';
import { CarDTO } from '../../../../application/ports/secondary/dto/car.dto';

@Injectable()
export class HttpCarsService implements GetsAllCarDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(): Observable<CarDTO[]> {
    return of([
      {
        id: 1,
        model: 'Mazda Rx7',
        plate: 'GD2121E',
        deliveryDate: '21-04-2017',
        deadline: '05-05-2016',
        client: {
          firstName: 'Jan',
          surname: 'Kowalski',
        },
        cost: 300,
        isFullyDamaged: true,
      },
      {
        id: 2,
        model: 'Mercedes 124',
        plate: 'KRK2200',
        deliveryDate: '24-05-2017',
        deadline: '03-06-2016',
        client: {
          firstName: 'Micha³',
          surname: 'Nowak',
        },
        cost: 1200,
        isFullyDamaged: true,
      },
      {
        id: 3,
        model: 'Renault CLIO',
        plate: 'GWE22011',
        deliveryDate: '02-02-2017',
        deadline: '03-03-2017',
        client: {
          firstName: 'Beata',
          surname: 'Dampc',
        },
        cost: 2800,
        isFullyDamaged: true,
      },
    ]);
  }
}
