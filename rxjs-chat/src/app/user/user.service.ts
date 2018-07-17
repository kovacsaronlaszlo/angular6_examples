import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {User} from "./user.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {

  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [
  UserService
];
