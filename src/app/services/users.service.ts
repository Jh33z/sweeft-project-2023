import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }
  getUsersWithPagination(page: number, pageSize: number): Observable<User[]> {
    const params = {
      _page: page.toString(),
      _limit: pageSize.toString(),
    };
    return this.http.get<User[]>(this.url, { params });
  }
  // only subject was not working!
  subject = new BehaviorSubject<User>(null);

  raiseSubject(data: User) {
    this.subject.next(data);
  }
}
