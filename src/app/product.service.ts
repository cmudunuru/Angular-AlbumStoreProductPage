import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map'

@Injectable()
export class ProductService {

  constructor(private _http:Http) { }

  private _albumUrl:string = "../assets/album.json";

  getAlbum(id:number):any{
    return this._http.get(this._albumUrl).pipe(
      tap(data => console.log("Products:"+JSON.stringify(data))),
      map((response:any) => response.json())
      );
  }
}
