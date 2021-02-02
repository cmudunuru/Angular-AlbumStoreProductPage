import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap,map } from 'rxjs/operators';
import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl:string = "../assets/album.json";

  constructor(private _http:Http) { }

  getAlbum(id: number):Observable<Album>{
    return this._http.get(this._albumUrl).pipe(
      tap(data => console.log("Products:"+JSON.stringify(data))),
      map(response => <Album>response.json())
      );
  }

  /*getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }*/
}
