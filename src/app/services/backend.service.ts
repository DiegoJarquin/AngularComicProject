import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComicsResponse } from '../models/ComicsResponse';
import { DelRequests } from '../models/DelRequests';
import { DelResponse } from '../models/DelResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { NewComicRequest } from '../models/NewComicRequest';
import { NewComicResponse } from '../models/NewComicResponse';
import { NewUserRequest } from '../models/NewUserRequest';
import { NewUserResponse } from '../models/NewUserResponse';

const BE_API = environment.backend_url;
const header = {headers: new HttpHeaders().set('Content-type','application/json')}
@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { }

  login(datos: LoginRequest){
    return this.http.post<LoginResponse>(BE_API+"/login", datos, header);
  }

  getComics(token: string){
    return this.http.get<ComicsResponse>(BE_API+"/comics?token="+token, header);
  }
  delComics(id: number){
    // console.log(datos);
    return this.http.delete<DelResponse>(BE_API+"/del?comic_id="+id, header);
  }
  agregarComic(datos: NewComicRequest, token: string){
    return this.http.post<NewComicResponse>(BE_API+"/agregar?token="+token, datos, header);
  }

  agregarUsuario(datos: NewUserRequest){
    return this.http.post<NewUserResponse>(BE_API+"/registro", datos, header);
  }


}
