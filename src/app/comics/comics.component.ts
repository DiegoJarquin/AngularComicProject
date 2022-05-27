import { Component, Output,EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comics } from '../models/ComicsResponse';
import { DelRequests } from '../models/DelRequests';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  listadoComics: Array<Comics> = [];
  @Output() onSelected = new EventEmitter<any>();

  constructor(private backend: BackendService,
              private router: Router,
              private share: ShareService

              ) { }

  ngOnInit(): void {
    if(typeof(Storage) !== 'undefined'){
     let token= localStorage.getItem("token");
     this.backend.getComics(token ? token: "").subscribe(x => {
       this.listadoComics = x.data;
     });
    }else {
      alert("Su browser no soporta localstorage");
    }

  }

  delete(comicid: number){
    let delComic = new DelRequests(comicid);
    this.backend.delComics(comicid).subscribe(
      x=>{
        console.log(x);
        this.ngOnInit();
      }
    );
  }

  agregar(){
    this.router.navigateByUrl("/agregar");
  }

  editar(comic: any){
    this.onSelected.emit(comic);
    this.router.navigateByUrl("/edit")
  }

}
