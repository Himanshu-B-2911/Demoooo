import { Component, OnInit, ViewChild } from '@angular/core';
import { Comp5Component } from '../comp5/comp5.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit   {
  userName:string = "Himanshu"

  @ViewChild(Comp5Component)
  child: Comp5Component = new Comp5Component;
  constructor() { }

  ngOnInit(): void {
    console.log(this.child);
    
  }
  ngAfterViewInit(): void{

  }
  changeProperty()
{
  this.child.userName = "Himanshu"
}

changeMethod(){
  this.child.clickMe()
}
}
