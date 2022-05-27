import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginRequest } from '../models/LoginRequest';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  formGroup: FormGroup = new FormGroup({});
  constructor(
    private backend: BackendService,
    private fb: FormBuilder,
    private share: ShareService,
    private router: Router) { }


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: '',
      pass: ''
    })
  }
  login(){
    let login = new LoginRequest(this.formGroup.controls["username"].value, this.formGroup.controls["pass"].value);
    this.backend.login(login).subscribe(
      x => {
        console.log(x);
        if(typeof(Storage) !== 'undefined'){
          localStorage.setItem("token", x.key);
          this.share.changeLogin(this.formGroup.controls["username"].value);
          this.router.navigateByUrl("/comics");
        }else {
          alert("Su browser no soporta localstorage");
        }
      }

    );
  }

  registrar(){
    this.router.navigateByUrl("/registro");
  }
}
