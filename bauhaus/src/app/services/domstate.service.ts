import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DOMStateService {

  private menuDesktopStateSubject = new Subject<boolean>();
  private SubmenuSubject = new Subject<any>();
  private menuMobileContainer = new Subject<any>();
  private menuMobileRolesSubject = new Subject<any>();
  private SubmenuMobileNamesSubject = new Subject<any>();

  constructor() { }

  //menu desktop
  watchMenuDesktopStateSubject(): Observable<boolean> {
    return this.menuDesktopStateSubject.asObservable();
  }
  setMenuDesktopState(status: boolean) {
    this.menuDesktopStateSubject.next(status);
  }

  //submenu desktop
  watchSumbenuSubject(): Observable<any> {
    return this.SubmenuSubject.asObservable();
  }

  setSubmenuDesktop(status: any) {
    this.SubmenuSubject.next(status);
  }

  //menu mobile

  watchMenuMobileContainerSubject(): Observable<any> {
    return this.menuMobileContainer.asObservable();
  }

  setMenuMobileContainer(status: any) {
    this.menuMobileContainer.next(status);
  }

  //menu mobile roles
  watchMenuMobileRolesSubject(): Observable<any> {
    return this.menuMobileRolesSubject.asObservable();
  }

  setMenuMobileRoles(status: any) {
    this.menuMobileRolesSubject.next(status);
  }

  //submenu mobile names
  watchMenuMobileNamesSubject(): Observable<any> {
    return this.SubmenuMobileNamesSubject.asObservable();
  }

  setMenuMobileNames(status: any) {
    this.SubmenuMobileNamesSubject.next(status);
  }
}
