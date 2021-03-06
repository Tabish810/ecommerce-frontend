import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {

  base_url = "http://localhost:3000/api/";
    constructor(private _http : Http) {}
    getData(url){
      return this._http.get(`${this.base_url}${url}`).map(data=>{
        return data.json();
      })
    }
    addData(url,data){
      return this._http.post(`${this.base_url}${url}`,data).map(data=>{
        console.log(data.json())
        return data.json();
      })
    }
    editData(url,data){
      return this._http.put(`${this.base_url}${url}`,data).map(data=>{
        console.log(data.json())
        return data.json();
      })
    }
    deleteData(url){
      return this._http.delete(`${this.base_url}${url}`).map(data=>{
        console.log(data.json())
        return data.json();
      })
    }

}
