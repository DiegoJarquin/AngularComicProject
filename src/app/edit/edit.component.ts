import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BackendService} from "../services/backend.service";
import {Router} from "@angular/router";
import {NewComicRequest} from "../models/NewComicRequest";
import {Comics} from "../models/ComicsResponse";
import { ComicsComponent } from '../comics/comics.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild(ComicsComponent) listadoComics: any;


  selectedComic: any;
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

  fillForm(comicid: number){

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

  onSelectedComic(comic: any){
    this.selectedComic = comic;
  }



}
