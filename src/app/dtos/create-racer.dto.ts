export class CreateRacerDto {
  name: string | null;
  car: string | null;
  is_legal: boolean | null;

  constructor(name: string | null, car: string | null, is_legal: boolean | null) {
    this.name = name;
    this.car = car;
    this.is_legal = is_legal;
  }
}
