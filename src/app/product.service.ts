import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl:string = "../assets/album.json";

  constructor(private _http:Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).pipe(
      tap(data => console.log("Products:"+JSON.stringify(data))),
      map((response:any) => response.json())
      );
  }
}
