import { ICountry } from './country.interface';
import { IPort } from './port.interface';

export class Port implements IPort {
  id: number;
  name: string;
  doctorcode?:string;
  country?: ICountry;
  timeZone: number;

  constructor(port: IPort) {
    this.id = port.id;
    this.name = port.name;
    this.doctorcode = port.doctorcode;
    this.country = port.country;
    this.timeZone = port.timeZone;
  }
}
