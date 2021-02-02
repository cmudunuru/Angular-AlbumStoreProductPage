import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo:Album;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(0).subscribe({
      next:(response)=>this.albumInfo=response,
      error:err=>console.log("Error while invoking the productService")
    });
  }

}
