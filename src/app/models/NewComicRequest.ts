export class NewComicRequest {

  nombre: string;
  date: any;
  sinopsis: string;
  editorial: string;

  constructor(nombre: string, date: any, sinopsis: string, editorial: string) {

    this.nombre=nombre;
    this.date = date;
    this.sinopsis=sinopsis;
    this.editorial=editorial;
  }
}
