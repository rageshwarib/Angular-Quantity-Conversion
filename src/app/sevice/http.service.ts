import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private quantity_url: string = "http://localhost:8080/quantity";


  constructor(private http: HttpClient) { }
  getQuantity(): any {
    return this.http.get(this.quantity_url);
  }
   getUnit(quantityType) {
     return this.http.get('http://localhost:8080/quantity/' + quantityType);
   }
 
}
