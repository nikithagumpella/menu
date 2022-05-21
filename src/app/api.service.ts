import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http:HttpClient) { }
  getcartdetails(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/ShoppingCart/698',{'headers': headers})
    .pipe(map((res:any)=>{
          return res;
        }))
  }
  getwishlistdetails(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/Wishlist/698',{'headers': headers})
    .pipe(map((data:any)=>{
          return data;
        }))
  }
  getproducts(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/Book',{'headers': headers})
    .pipe(map((book:any)=>{
      return book;
    }))
  }

}
