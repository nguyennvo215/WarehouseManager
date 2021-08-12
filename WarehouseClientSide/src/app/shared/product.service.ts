import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  formData:Product = new Product();
  readonly baseURL = 'https://localhost:44311/api/Products'
  list : Product[];

  postProduct(){
    return this.http.post(this.baseURL, this.formData);
  }
  
  setCap(id) {
    return this.http.put(this.baseURL + "/SetCapacity/" + id, this.formData);
  }

  receiveProduct(id) {
    return this.http.put(this.baseURL + "/Receive/" + id, this.formData);
  }

  dispatchProduct(id) {
    return this.http.put(this.baseURL + "/Dispatch/" + id, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Product[])
  }
}
