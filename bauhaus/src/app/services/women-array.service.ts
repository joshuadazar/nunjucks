import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WomenArrayService {

  public womenArray:any = {
    artistas:[
      "Friedl Dicker",
      "Kitty Fischer",
      "Lydia Driesch-Foucar",
      "Margaret Leiteritz",
      "Margarete Heymann-Loebenstein",
      "Marguerite Friedlaender Wildenhain"
    ],
    arquitectas:[
      'Lotte Stam-Beese',
      'Wera Meyer-Waldeck'
    ],
    disenadoras:[
      "Anni Albers",
      "Bella Ullmann-Broner",
      "Benita Koch-Otte",
      "Gertrud Arndt",
      "Gunta Stölzl",
      "Ilse Fehling",
      "Katt Both",
      "Lena Meyer-Bergner",
      "Lis Beyer-Volger",
      "Lore Leudesdorff-Engstfeld",
      "Lou Scheper-Berkenkamp",
      "Margarete Dambeck",
      "Margarete Leischner",
      "Margaretha Reichardt",
      "Marianne Brandt",
      "Otti Berger",
      "Ruth Hollós",
      "Ré Soupault"
    ],
    escritoras:['Ise Gropius'],
    fotografas:[
      "Etel Mittag-Fodor",
      "Edith Tudor-Hart",
      "Florence Henri",
      "Grit Kallin-Fischer",
      "Irene Bayer",
      "Ivana Tomljenović",
      "Lucia Moholy"
    ],
    maestras:[
      "Gertrud Grunow",
      "Karla Grosch"
    ]
  }

  private womenListSubject = new Subject<any>();

  constructor() { }
  watchMenuDesktopStateSubject(): Observable<any> {
    return this.womenListSubject.asObservable();
  }
  setWomenList(status: any) {
    this.womenListSubject.next(status);
  }
}
