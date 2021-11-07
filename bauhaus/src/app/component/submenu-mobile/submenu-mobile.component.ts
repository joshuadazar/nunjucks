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
  constructor(
    private womenService: WomenArrayService,
    private domService: DOMStateService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.watchMenuNames();
    this.watchNameDataChange();
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



  updateSubmenu(list:any) {
    this._showSubmenu=true;
    this._role= list.getAttribute("value")
    if(this._role==='artistas') this._womenList= this.womenService.womenArray['artistas'];
    if(this._role==='arquitectas') this._womenList= this.womenService.womenArray['arquitectas'];
    if(this._role==='disenadoras') this._womenList= this.womenService.womenArray['disenadoras'];
    if(this._role==='escritoras') this._womenList= this.womenService.womenArray['escritoras'];
    if(this._role==='fotografas') this._womenList= this.womenService.womenArray['fotografas'];
    if(this._role==='maestras') this._womenList= this.womenService.womenArray['maestras'];
    if(this._womenList.length>0) this.domService.setMenuMobileNames(true);
  }

  onHideSubmenuMobile() {
    this.domService.setMenuMobileContainer(true);
    this.domService.setMenuMobileNames(false);
    this.domService.setMenuMobileRoles(true);
  }

}
