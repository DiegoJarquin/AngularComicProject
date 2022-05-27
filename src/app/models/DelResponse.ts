export class DelResponse {
  status: number;
  mensaje: string;
  datos: Array<Comics>;

  constructor(status: number, mensaje: string, datos: Array<Comics>) {
    this.status = status;
    this.mensaje = mensaje;
    this.datos = datos;

  }
}

export class Comics {
  comic_id: number;
  user_id: number;
  nombre: string;
  date: any;
  sinopsis: string;
  editorial: string;

  constructor(comic_id: number,user_id: number, nombre: string, date: any, sinopsis: string, editorial: string) {
    this.comic_id=comic_id;
    this.user_id=user_id;
    this.nombre=nombre;
    this.date = new Date(date).toLocaleDateString();
    this.sinopsis=sinopsis;
    this.editorial=editorial;
  }
}
