import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
@Input() nameP : any;
  
name="Himanshu Ramesh Barapatre";
selected = "Angular"

  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('inputRef') inputRefer!: ElementRef<any>; 
  constructor() { }
  ngAfterViewInit(){
    console.log(this.inputRefer);
    this.inputRefer.nativeElement.focus();
    
  }

  ngOnInit(): void {
  console.log(this.nameP);
  }
  

  maxDate(){
    
  }

  onSubmit(  ){
    console.log(this.myForm);
    
  }
 

}
