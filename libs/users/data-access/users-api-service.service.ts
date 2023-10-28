import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay, retry, tap } from 'rxjs';

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersApiServiceService {
  private http = inject(HttpClient);

  public getUsers(): Observable<Users[]> {
    return this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(tap((users) => console.log(users)));
  }
}
