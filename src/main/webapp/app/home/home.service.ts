import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }
  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || 'Server error');

  }

  viewStates(id: number) {
     const url = `/api/customers/${id}`;
    //const url = `/api/countries/all`;
    return this.http.get(url)
      .map((resp: Response) => {
        // console.log(JSON.parse(JSON.stringify(resp))._body);
        return resp.json();
      }).catch(this.handleError);
  }
  getProduct(name: String) {
    const url = `/api/product/${name}`;
   //const url = `/api/countries/all`;
   return this.http.get(url)
     .map((resp: Response) => {
       // console.log(JSON.parse(JSON.stringify(resp))._body);
       return resp.json();
     }).catch(this.handleError);
 }


}
