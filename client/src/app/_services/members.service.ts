import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);
  baseURL = environment.apiURL;

  getMembers() {
    return this.http.get<Member[]>(this.baseURL + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseURL + 'users/' + username);
  }
}