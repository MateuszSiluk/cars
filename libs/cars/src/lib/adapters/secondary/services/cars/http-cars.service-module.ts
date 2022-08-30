import { NgModule } from '@angular/core';
import { HttpCarsService } from './http-cars.service';
import { GETS_ALL_CAR_DTO } from '../../../../application/ports/secondary/dto/gets-all-car.dto-port';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HttpClient,
    HttpCarsService,
    { provide: GETS_ALL_CAR_DTO, useExisting: HttpCarsService },
  ],
  exports: [],
})
export class HttpCarsServiceModule {}
