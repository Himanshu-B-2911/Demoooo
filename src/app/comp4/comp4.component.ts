import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName: any;
  constructor(private _subSubject  : SubjectServiceService){
    this._subSubject.userName.subscribe(uname =>{
      this.userName = uname
    })
 }

  ngOnInit(): void {
  }

  updateUserName(uname:any)
  {
    this._subSubject.userName.next(uname.value)
  }

}
