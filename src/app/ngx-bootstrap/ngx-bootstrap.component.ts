import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-ngx-bootstrap',
  templateUrl: './ngx-bootstrap.component.html',
  styleUrls: ['./ngx-bootstrap.component.css'],
 
})
export class NgxBootstrapComponent implements OnInit {

  constructor() { }
  isCollapsed = true;
  ngOnInit(): void {
  }

}
