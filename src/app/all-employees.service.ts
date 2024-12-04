import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {

  constructor(private _httpClient:HttpClient) { }

  createEmployee(employee:any):Observable <any> {
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",employee);
  }
  
  allEmployees():Observable <any> {
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
  }

  deleteEmployee(id:number):Observable <any> {
    return this._httpClient.delete(`https://6572df5d192318b7db412dfe.mockapi.io/employees/`+id);
  }

  filterEmployee(word:string):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?filter='+word);

  }

  sortEmployee(column:string,order:string):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy='+column +"&order="+order);
  }

  paginationService(pageLimit:number,pageNumber:number):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?limit='+pageLimit+"&page="+pageNumber);
  }


}
