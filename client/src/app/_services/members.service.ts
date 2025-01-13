import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/members';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);
  baseURL = environment.apiURL;
  members = signal<Member[]>([]);

  getMembers() {
    return this.http.get<Member[]>(this.baseURL + 'users').subscribe({
      next: members => this.members.set(members)
    });
  }

  getMember(username: string) {
    const member = this.members().find(x => x.username === username);
    if (member !== undefined) return of(member);

    return this.http.get<Member>(this.baseURL + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseURL + 'users', member).pipe(
      tap(() => {
        this.members.update(members => members.map(m => m.username === member.username ? member : m))
      })
    );
  }
}
