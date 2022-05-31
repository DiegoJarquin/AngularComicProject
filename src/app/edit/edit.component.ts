import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BackendService} from "../services/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NewComicRequest} from "../models/NewComicRequest";
import {Comics} from "../models/ComicsResponse";
import { ComicsComponent } from '../comics/comics.component';
import { EditComicRequest } from '../models/EditComicRequest';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild(ComicsComponent) listadoComics: any;




  msg: string = "";
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend: BackendService,private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public datepipe: DatePipe) { }

  ngOnInit(): void {
    // let selectedComic = new Comics(Number(this.route.snapshot.paramMap.get("comic_id")),Number(this.route.snapshot.paramMap.get("user_id")),String(this.route.snapshot.paramMap.get("nombre")),this.route.snapshot.paramMap.get("date"),String(this.route.snapshot.paramMap.get("sinopsis")),String(this.route.snapshot.paramMap.get("editorial")));
    let comic_id = this.route.snapshot.paramMap.get("comic_id");
    console.log(comic_id);

    let date = new Date(String(this.route.snapshot.paramMap.get("date")));
    let date_format = this.datepipe.transform(date, 'yyyy-MM-dd');

    this.formGroup = this.fb.group({
      name:'',
      date:'',
      sinopsis:'',
      editorial:''
    })

    this.formGroup.setValue({
      name: this.route.snapshot.paramMap.get("nombre"),
      date: date_format,
      sinopsis: this.route.snapshot.paramMap.get("sinopsis"),
      editorial: this.route.snapshot.paramMap.get("editorial")
    })
  }

  fillForm(comicid: number){

  }

  grabar(){
    let comic_id = Number(this.route.snapshot.paramMap.get("comic_id"));
    let user_id =Number(this.route.snapshot.paramMap.get("user_id"));

    let editComic = new EditComicRequest(comic_id, user_id, this.formGroup.controls["name"].value, this.formGroup.controls["date"].value,this.formGroup.controls["sinopsis"].value,this.formGroup.controls["editorial"].value);
    this.backend.editarComic(editComic).subscribe(
      x => {
        console.log(x);
        this.msg = x.mensaje;
      });
  }

  back(){
    this.router.navigateByUrl("/comics");
  }




}
