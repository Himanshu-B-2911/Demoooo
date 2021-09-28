import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-calss/Servicess/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  posts:any;

  constructor(private APISRV:ApiService ) {
    this.APISRV.getPosts().subscribe((DATA)=>{
      console.log(DATA);
      this.posts= DATA;
    })
    
   }

  ngOnInit(): void {
  }

}
