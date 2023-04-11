import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getStudentList(): any {
    return this.http.get(`${this.url}/attendance-sheet`);
  }

  public sendSignature(payload: { signUrl: string; idStudent: number }): any {
    return this.http.put(`${this.url}/student/sign`, payload);
  }

  public setAbsent(payload: { idStudent: number }): any {
    return this.http.put(`${this.url}/student/setAbs`, payload);
  }
}
