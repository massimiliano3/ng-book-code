/**
 * Created by MGobbi on 11/05/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
  group: any;

  setGroup(newGroup) {
    this.group = newGroup;
  }

  getGroup(): any {
    return this.group;
  }
}
