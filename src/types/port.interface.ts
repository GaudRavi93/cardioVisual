import { ICountry } from './country.interface';
import { ILocation } from './location.interface';

export class IPort {
  id: number;
  name: string;
  doctorcode?:string;
  country?: ICountry;
  location?: ILocation;
  timeZone?: number;
}
