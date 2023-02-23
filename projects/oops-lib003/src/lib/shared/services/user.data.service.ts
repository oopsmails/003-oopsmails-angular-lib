import { UserLib003 } from './../models/user.lib003';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { USERS_DATA } from '../data/users.data';

@Injectable({ providedIn: 'root' })
export class UserDataServiceLib003 {
  //   getUserData(delayInMs?: number): Observable<User[]> {
  //     let delay = 0;
  //     if (delayInMs) {
  //       delay = delayInMs;
  //     }

  //     let result$: Observable<User[]> = of([]);

  //     setTimeout(() => {
  //       result$ = of(USERS_DATA);
  //     }, delayInMs);

  //     return result$;
  //   }

  getUserData(delayInMs?: number): Observable<UserLib003[]> {
    return of(USERS_DATA);
  }
}
