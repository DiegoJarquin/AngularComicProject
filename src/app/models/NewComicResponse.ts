import { Comics } from "./ComicsResponse";

export class NewComicResponse {
  status: number;
  mensaje: string;
  datos: Comics;

  constructor(status: number, mensaje: string, datos: Comics) {
    this.status = status;
    this.mensaje = mensaje;
    this.datos = datos;
  }
}
