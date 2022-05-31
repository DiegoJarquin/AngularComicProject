export class EditComicRequest {
  comic_id: number;
  user_id: number;
  nombre: string;
  date: any;
  sinopsis: string;
  editorial: string;

  constructor(comic_id: number, user_id: number, nombre: string, date: any, sinopsis: string, editorial: string) {

    this.comic_id=comic_id;
    this.user_id=user_id;
    this.nombre=nombre;
    this.date = date;
    this.sinopsis=sinopsis;
    this.editorial=editorial;
  }
}
