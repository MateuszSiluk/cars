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
import {
  TOTAL_COST_QUERY_PORT,
  TotalCostQueryPort,
} from '../application/ports/primary/query/total-cost.query-port';
import {TotalCostQuery} from "../application/ports/primary/query/total-cost.query";

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

totalCost$: Observable<TotalCostQuery> = this._totalCostQueryPort.totalCost();
  constructor(
    @Inject(GETS_ALL_SHOW_ALL_CARS_QUERY)
    private _getsAllShowAllCarsQuery: GetsAllShowAllCarsQueryPort,
    @Inject(TOTAL_COST_QUERY_PORT)
    private _totalCostQueryPort: TotalCostQueryPort
  ) {}
}
