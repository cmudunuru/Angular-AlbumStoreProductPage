import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Album } from './album';
import { Product } from './product';
import { map } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl:string = "../assets/album.json";

  private _productsUrl:string = "../assets/products.json";

  constructor(private _http:Http) { }

  getAlbum(id: number):Observable<Album>{
    return this._http.get(this._albumUrl).pipe(
      tap(data => console.log("Products:"+JSON.stringify(data))),
      map(response => <Album>response.json())
      );
  }

  getProductsNew():Observable<Product>{
    return this._http.get(this._productsUrl).pipe(
      tap(data => console.log("Products:"+JSON.stringify(data))),
      map(response => <Product>response.json())
      );
  }

  getProducts():Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json()
    );
  }

  /*getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }*/
}
