import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@ViewChild(ContactComponent,{static:true})callChild:ContactComponent | undefined; 

userName: any;

parentName:any="barapatare";
constructor(private _subSubject  : SubjectServiceService){
  this._subSubject.userName.subscribe(uname =>{
    this.userName = uname
  })
}

  ngOnInit(): void {
    console.log(this.callChild)
   this.parentName=this.callChild?.name;
  }

}
