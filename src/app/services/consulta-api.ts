import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Substation {
  id?: string;
  name: string;
  relays?: string[];
  imageUrl?: string;
  conclusao?: number | string;
}

@Injectable({
  providedIn: 'root',
})
export class ConsultaApi {
  private readonly base = 'https://6943f9a27dd335f4c35eccd8.mockapi.io/api/v1';

  constructor(private http: HttpClient) {}

  getSubstations(): Observable<Substation[]> {
    return this.http.get<Substation[]>(`${this.base}/substations`);
  }

  getSubstation(id: string): Observable<Substation> {
    return this.http.get<Substation>(`${this.base}/substations/${id}`);
  }
}
