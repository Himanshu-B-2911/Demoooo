import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  @ViewChild('myForm') myForm : NgForm | undefined
  defaultSelector = "default"
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
       console.log(this.myForm);
       
  }

}
