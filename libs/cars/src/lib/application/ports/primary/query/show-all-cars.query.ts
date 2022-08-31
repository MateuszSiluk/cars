export class ShowAllCarsQuery {
  constructor(
    public readonly id: number,
    public readonly model: string,
    public readonly plate: string,
    public readonly deliveryDate: string,
    public readonly deadline: string,
    public readonly clientFirstName: string,
    public readonly clientSurname: string,
    public readonly cost: number,
    public readonly isFullyDamaged: boolean
  ) {}
}
