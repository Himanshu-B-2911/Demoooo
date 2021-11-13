import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
@Input() nameP : any;


//-------- Reactive From--------

 registerForm!: FormGroup;
  
name="Himanshu Ramesh Barapatre";
selected = "Angular"

  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('inputRef') inputRefer!: ElementRef<any>; 
  constructor(private formBuilder: FormBuilder) { }
  ngAfterViewInit(){
    console.log(this.inputRefer);
    this.inputRefer.nativeElement.focus();
    
  }

  ngOnInit(): void {
   
  }
  

  maxDate(){
    
  }

  onSubmit(  ){
    console.log(this.myForm);
    this.myForm.resetForm()
    
  }
 

}
