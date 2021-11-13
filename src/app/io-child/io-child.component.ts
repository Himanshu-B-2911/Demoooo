import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-io-child',
  templateUrl: './io-child.component.html',
  styleUrls: ['./io-child.component.css']
})
export class IOChildComponent implements OnInit {

 
  @Input() isSelect:boolean = false;
  @Input() productSelected :any;
  @Output() addProduct = new EventEmitter<any>()
  @Output() demoProduct = new EventEmitter();
  demoData = "Call from child to parent"
  constructor() { }

  ngOnInit(): void {
  }

  addedProduct()
  {
     
    this.addProduct.emit(this.productSelected);
  }

  demoTest(){
    this.demoProduct.emit(this.demoData)
  }

}
