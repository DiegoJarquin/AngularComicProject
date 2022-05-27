import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BackendService} from "../services/backend.service";
import {Router} from "@angular/router";
import {NewComicRequest} from "../models/NewComicRequest";
import { NewUserRequest } from '../models/NewUserRequest';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  msg: string = "";
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend: BackendService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name:'',
      username:'',
      pass:'',
      birth:'',
      sex: ''
    })
  }

  back(){
    this.router.navigateByUrl("/login");
  }

  grabar(){
    let newUser = new NewUserRequest(this.formGroup.controls["name"].value, this.formGroup.controls["username"].value,this.formGroup.controls["pass"].value,this.formGroup.controls["birth"].value,this.formGroup.controls["sex"].value);
    this.backend.agregarUsuario(newUser).subscribe(
      x => {
        console.log(x);
        this.msg = x.mensaje;
      });
  }

}
