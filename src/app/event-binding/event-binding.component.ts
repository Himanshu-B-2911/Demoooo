import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  test:string =""
  constructor() { }

  ngOnInit(): void {
  }

  

  onClick(name:any)
  {
    this.test=name.value;
    console.log(name);
  }
}
