import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() productSelected:boolean = false;
  @Input() selectedProduct:string;
  addedProduct: any;

  ngOnInit(): void {
  }

 

  // tslint:disable-next-line: typedef
  onAddProduct(){
    this.addedProduct = this.selectedProduct;
  }

}
