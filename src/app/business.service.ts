import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business'; //definicion de URL backend api

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    //console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  //obtener los datos desde Mongodb y visualizarlos por medio de Angular
  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }
  
  //editar los datos y enviarlo a la base de datos
  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number, id) {
    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_gst_number: business_gst_number
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}

