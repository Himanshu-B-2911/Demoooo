import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isSelect:boolean = false;
  productSelected :any;
  addProduct: any;
  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product:any)
  {
    this.isSelect = true
    this.productSelected = product
  }

  addedProduct()
  {
    this.addProduct = this.productSelected
  }
}
