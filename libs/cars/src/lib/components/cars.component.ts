import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ShowAllCarsQuery } from '../application/ports/primary/query/show-all-cars.query';
import {
  GETS_ALL_SHOW_ALL_CARS_QUERY,
  GetsAllShowAllCarsQueryPort,
} from '../application/ports/primary/query/gets-all-show-all-cars.query-port';

@Component({
  selector: 'lib-cars',
  styleUrls: ['./cars.component.scss'],
  templateUrl: './cars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsComponent {
  cars$: Observable<ShowAllCarsQuery[]> =
    this._getsAllShowAllCarsQuery.getAllShowAllCarsQuery();

  constructor(
    @Inject(GETS_ALL_SHOW_ALL_CARS_QUERY)
    private _getsAllShowAllCarsQuery: GetsAllShowAllCarsQueryPort
  ) {}
}
