import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io-parent',
  templateUrl: './io-parent.component.html',
  styleUrls: ['./io-parent.component.css']
})
export class IOParentComponent implements OnInit {
  isproSelect:boolean = false;
  proSelected :any;
  addProduct : any;
  demoData : any;
 
  constructor() { }

  ngOnInit(): void {
  }
  selectProduct(product:any)
  {
    this.isproSelect = true

    console.log(product);
    this.proSelected = product
  }

  onAddProduct(proData: any)
  {
    console.log(proData);
    this.addProduct = proData;
     
  }

  onAddDemo(data:any){
    this.demoData=data;
  }

  

}
