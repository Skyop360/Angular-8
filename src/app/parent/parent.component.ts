import { analyzeAndValidateNgModules, flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  addedProduct: any;
  
  productSelected: boolean = false;

  selectedProduct: string;
  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  onSelectProduct(product){
    this.productSelected = true;
    this.selectedProduct = product;

}

  
  // tslint:disable-next-line: typedef
  onAddProduct(){
    this.addedProduct = this.selectedProduct;
  }

}
