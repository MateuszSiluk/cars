import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TotalCostQuery } from './total-cost.query';

export const TOTAL_COST_QUERY_PORT = new InjectionToken<TotalCostQueryPort>(
  'TOTAL_COST_QUERY_PORT'
);

export interface TotalCostQueryPort {
  totalCost(): Observable<TotalCostQuery>;
}
