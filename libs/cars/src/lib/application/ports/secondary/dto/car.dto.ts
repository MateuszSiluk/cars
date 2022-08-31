import { ClientDTO } from './client.dto';

export interface CarDTO {
  readonly id: number;
  readonly model: string;
  readonly plate: string;
  readonly deliveryDate: string;
  readonly deadline: string;
  readonly client: ClientDTO;
  readonly cost: number;
  readonly isFullyDamaged: boolean;
}
