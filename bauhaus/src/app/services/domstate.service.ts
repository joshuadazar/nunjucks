import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DOMStateService {

  private menuDesktopStateSubject = new Subject<boolean>();

  constructor() { }
  watchMenuDesktopStateSubject(): Observable<boolean> {
    return this.menuDesktopStateSubject.asObservable();
  }
  setMenuDesktopState(status: boolean) {
    this.menuDesktopStateSubject.next(status);
  }
}
