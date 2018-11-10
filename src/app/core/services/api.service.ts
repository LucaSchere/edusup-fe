import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {st} from '@angular/core/src/render3';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private devApiRoute = 'http://localhost:3000';
  private prodApiRoute = 'TODO';
  private readonly apiRoute: string;
  private devMode = true;

  constructor(private http: HttpClient) {
    if (this.devMode) {
      this.apiRoute = this.devApiRoute;
    } else {
      this.apiRoute = this.prodApiRoute;
    }
  }
  // TODO
  logon(jwt) {
    const url = this.apiRoute + '/api/auth/logon';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: jwt
      })
    };
    return this.http.post<any>(url, {jwt: jwt}, httpOptions);
  }

  login(username: string, password: string) {
    const url = this.apiRoute + '/api/auth/login';
    return this.http.post<any>(url, {username: username, password: password});
  }

  register(username: string, email: string, firstName: string, lastName: string,
           birthday: string, password: string, passwordConfirm: string) {
    const url = this.apiRoute + '/api/auth/register';
    return this.http.post<any>(url, {username: username, email: email,
      firstname: firstName, lastname: lastName, birthday: birthday,
      password: password, passwordConfirm: passwordConfirm});
  }
}
