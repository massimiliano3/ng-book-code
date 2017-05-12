import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imported here
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService, // <-- added right here
    GroupService
  ],
  declarations: []
})
export class UserDemoModule { }
