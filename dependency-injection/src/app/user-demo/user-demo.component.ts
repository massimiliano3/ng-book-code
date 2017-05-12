import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent {
  userName: string;
  // removed `userService` because of constructor shorthand below
  groupName: string;

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`.
  constructor(private userService: UserService, private groupService: GroupService) {
    // empty because we don't have to do anything else!
  }

  // below is the same...
  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.groupService.setGroup({name: 'group 1'});

    this.groupName = this.groupService.getGroup().name;

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
