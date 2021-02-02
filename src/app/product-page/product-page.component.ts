import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    
  }

}
