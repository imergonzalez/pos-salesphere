import { Injectable } from '@angular/core';
import { SidebarOptionsMenu, TypeOption } from '../../interfaces/Sidebar';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public menuItems: SidebarOptionsMenu[] = [];

  constructor() {
    this.menuItems = [
      {
        path: '/dashboard',
        title: '/dashboard',
        typeOption: TypeOption.Link,
      }
    ];
  }
}
