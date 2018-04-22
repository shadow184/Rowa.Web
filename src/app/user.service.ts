import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../app/user';
import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post('http://localhost:54551/api/user/createuser', user);
  }

  checkUser(user: User) {
    return this.http.post<boolean>('http://localhost:54551/api/user/checkuser', user);
  }

  resetPassword(user: User) {
    return this.http.post('http://localhost:54551/api/user/resetpassword', user);
  }

  updateProfilePicture(picToUpload: File, username: string) {
    const formData: FormData = new FormData();
    formData.append('profilePic', picToUpload, username + '-' + picToUpload.name);

    return this.http.post<any>('http://localhost:54551/api/user/updateprofilepic', formData);
  }
}
