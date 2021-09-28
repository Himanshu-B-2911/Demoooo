import { Component, OnInit } from '@angular/core';
import { ApiService } from './Servicess/api.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-api-calss',
  templateUrl: './api-calss.component.html',
  styleUrls: ['./api-calss.component.css']
})
export class ApiCalssComponent implements OnInit {

  constructor(private APiServ:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
  this.APiServ.getPosts().subscribe((date:any)=>{
    console.log(date);
    
  },(error)=>{
    console.log(error);
  });
}
}
