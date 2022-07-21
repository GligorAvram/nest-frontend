export class UpdateRacerDto {
  id: string;
  name: string | null;
  car: string | null;
  position: number | null;
  is_legal: boolean | null;

  constructor(id: string, name: string | null, car: string | null, position: number | null, is_legal: boolean | null) {
    this.id = id;
    this.name = name;
    this.car = car;
    this.position = position;
    this.is_legal = is_legal;
  }
}
