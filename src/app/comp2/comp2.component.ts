import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
