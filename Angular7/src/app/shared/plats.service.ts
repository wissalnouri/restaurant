import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  getPlats(){
    
    return this.http.get(this.BaseURI+ '/plats');
  }
  formModel = this.fb.group({
    Nom: [''],
    Prix: [''],
    Image: [''],
    Description: [''],
  });
  PostPlats() {
    
    var body = {
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
      prix:this.formModel.value.Prix,
      image:this.formModel.value.Image
    
    };
    return this.http.post(this.BaseURI + '/plats', body);
  }

}
