import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-calss/Servicess/api.service';
import { ServiceApiService } from '../service-api.service';
import { SubjectServiceService } from '../subject-service.service';
//import { subscribe } from 'rxjs'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName: any;
  constructor(private _subSubject  : SubjectServiceService){
     this._subSubject.userName.subscribe(uname =>{
       this.userName = uname
     })
  }

  ngOnInit(): void {
  }

  updateUserName(uname: any)
  {
    //this.userName = uname.value
    this._subSubject.userName.next(uname.value)
  }
}
