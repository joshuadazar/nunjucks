import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { DOMStateService } from 'src/app/services/domstate.service';
import { WomenArrayService } from 'src/app/services/women-array.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  _womenList: any[] = [];
  _WDService: any[] = ['']
  _submenuDesktopState: boolean = false;
  _overflowSubmenuMax: boolean = false;
  //External

  //DOM
  @ViewChild("womenList") womenList!: ElementRef;
  constructor(
    private womenService: WomenArrayService,
    private domService: DOMStateService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.watchWomenListSubject();
    this.watchSubmenuDesktop();
    this.watchWomenMenuData();
  }

  watchWomenMenuData() { // Women Data menu list
    this.womenService.getWomenMenuData().subscribe(data => {
      this._WDService=data;
    })
  }

  watchWomenListSubject() {//menu item from header
    this.womenService.watchMenuDesktopDataSubject().subscribe(menuItemData => {
      this._submenuDesktopState=true;
        this.updateSubmenu(menuItemData)
    })
  }


  watchSubmenuDesktop() {//on resize window, hide submnenu
    this.domService.watchSumbenuSubject().subscribe(state => {
       this._submenuDesktopState=state;
    })
  }

  getMenulist(names:any[]) {
    console.log(names);
    if (names !== undefined) this._womenList = Object.values(names);
  }

  updateSubmenu(menuItemData:any) {
    let role= menuItemData.getAttribute("value")
    let positionX= window.scrollX + menuItemData.getBoundingClientRect().left

    if (role==='artistas') this.getMenulist(this._WDService[2])
    if (role==='arquitectas') this.getMenulist(this._WDService[0]);
    if (role==='disenadoras') this.getMenulist(this._WDService[1]);
    if (role==='escritoras') this.getMenulist(this._WDService[3]);
    if (role==='fotografas') this.getMenulist(this._WDService[4]);
    if (role==='maestras') this.getMenulist(this._WDService[5]);
    this.changeSubmenuPosition(positionX)
    this._womenList.length>12 ?
    this._overflowSubmenuMax=true :
    this._overflowSubmenuMax=false;
  }

  changeSubmenuPosition(pos:any):void {
    this.renderer.setStyle(this.womenList.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.womenList.nativeElement, 'left', `${pos }px`);

  }

}
