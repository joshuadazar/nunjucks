import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class WomenArrayService {

  private womenListSubject = new Subject<any>();
  private womenListMobileSubject = new Subject<any>();

  constructor(
    private WomenMenuData: AngularFirestore
  ) { }

  getWomenMenuData(){
    return this.WomenMenuData.collection('artists').valueChanges();
  }

  // data menu desktop to sumbmenu desktop
  watchMenuDesktopDataSubject(): Observable<any> {
    return this.womenListSubject.asObservable();
  }
  setWomenList(status: any) {
    this.womenListSubject.next(status);
  }

  // data menu mobile to submenu
  watchMenuMobileDataSubject(): Observable<any> {
    return this.womenListMobileSubject.asObservable();
  }
  setWomenDataMobile(status: any) {
    this.womenListMobileSubject.next(status);
  }


}
