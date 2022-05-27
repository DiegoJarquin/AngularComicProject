import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { NewComicRequest } from '../models/NewComicRequest';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  msg: string = "";
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend: BackendService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name:'',
      date:'',
      sinopsis:'',
      editorial:''
    })
  }

  grabar(){
    // console.log(this.formGroup.controls["date"].value);
    let token= localStorage.getItem("token");
    let newComic = new NewComicRequest(this.formGroup.controls["name"].value, this.formGroup.controls["date"].value,this.formGroup.controls["sinopsis"].value,this.formGroup.controls["editorial"].value);
    this.backend.agregarComic(newComic,token ? token: "").subscribe(
      x => {
        console.log(x);
        this.msg = x.mensaje;
      });
  }

  back(){
    this.router.navigateByUrl("/comics");
  }

}
