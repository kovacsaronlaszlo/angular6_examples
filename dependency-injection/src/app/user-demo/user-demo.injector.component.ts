import {
  Component,
  ReflectiveInjector
 } from '@angular/core';

 import { UserService } from '../services/user.service';

@Component({
  selector: 'app-injector-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent {
  userName: string;
  userService: UserService;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    this.userService = injector.get(UserService);
  }

  signIn(): void {
    this.userService.setUser({
      name: 'kovacs aron'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
