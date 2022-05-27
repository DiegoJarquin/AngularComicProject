import { NewUserRequest } from "./NewUserRequest";

export class NewUserResponse {
  status: number;
  mensaje: string;
  datos: NewUserRequest;

  constructor(status: number, mensaje: string, datos: NewUserRequest) {
    this.status = status;
    this.mensaje = mensaje;
    this.datos = datos;
  }
}
