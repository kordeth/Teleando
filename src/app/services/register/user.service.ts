import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  registerUser(data: any) {
    return this.http.post('https://kganvp4pah.execute-api.us-east-1.amazonaws.com/S1/usuario', data, {responseType: 'json'});
  }
  
}
