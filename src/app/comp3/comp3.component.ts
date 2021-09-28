import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
