import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../Models/UI-interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl="http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getProducts():Observable<product[]>{
    return this.http.get<product[]>(this.baseUrl)
  }

  getProductById(id:string){
    return this.http.get<product>(`${this.baseUrl}/${id}`)
  }

  updateproduct(data:product){
    return this.http.put<product>(`${this.baseUrl}/${data.id}`,data)
  }


  addProduct(pro:product){
    return this.http.post<product>(this.baseUrl, pro)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
