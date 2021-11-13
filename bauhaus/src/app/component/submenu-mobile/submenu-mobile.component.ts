import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DOMStateService } from 'src/app/services/domstate.service';
import { WomenArrayService } from 'src/app/services/women-array.service';

@Component({
  selector: 'app-submenu-mobile',
  templateUrl: './submenu-mobile.component.html',
  styleUrls: ['./submenu-mobile.component.scss']
})
export class SubmenuMobileComponent implements OnInit {

  @ViewChild("submenuMobile") _submenuMobile!: ElementRef;

  public _womenList:any[]=[];
  public _role: string=""
  public _showSubmenu: boolean = false;
  public _WDService:any[]=['']
  constructor(
    private womenService: WomenArrayService,
    private domService: DOMStateService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.watchMenuNames();
    this.watchNameDataChange();
    this.watchWomenMenuData();
  }

  watchWomenMenuData() { // Women Data menu list
    this.womenService.getWomenMenuData().subscribe(data => {
      this._WDService=data;
    })
  }

 //service watchers
  watchNameDataChange() { //data
    this.womenService.watchMenuMobileDataSubject().subscribe(list=> {
      this.updateSubmenu(list);
    });
  }

  watchMenuNames() { // names
    this.domService.watchMenuMobileNamesSubject().subscribe(state => {
      this._showSubmenu=state;
    })
  }

  getMenulist(names:any[]) {
    console.log(names);
    if (names !== undefined) this._womenList = Object.values(names);
  }

  updateSubmenu(list:any) {
    this._showSubmenu=true;
    this._role= list.getAttribute("value")
    if(this._role==='artistas') this.getMenulist(this._WDService[2])
    if(this._role==='arquitectas') this.getMenulist(this._WDService[0]);
    if(this._role==='disenadoras') this.getMenulist(this._WDService[1]);
    if(this._role==='escritoras') this.getMenulist(this._WDService[3]);
    if(this._role==='fotografas') this.getMenulist(this._WDService[4]);
    if(this._role==='maestras') this.getMenulist(this._WDService[5]);
    if(this._womenList.length>0) this.domService.setMenuMobileNames(true);
  }

  onHideSubmenuMobile() {
    this.domService.setMenuMobileContainer(true);
    this.domService.setMenuMobileNames(false);
    this.domService.setMenuMobileRoles(true);
  }

}
