import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { DOMStateService } from 'src/app/services/domstate.service';
import { WomenArrayService } from 'src/app/services/women-array.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  _womenList: any = ['uno','dos','tres'];
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
    this.watchSubmenuDesktop()
  }
  //menu item from header
  watchWomenListSubject() {
    this.womenService.watchMenuDesktopDataSubject().subscribe(menuItemData => {
      this._submenuDesktopState=true;
      this.updateSubmenu(menuItemData)
    })
  }

  //on resize window, hide submnenu
  watchSubmenuDesktop() {
    this.domService.watchSumbenuSubject().subscribe(state => {
       this._submenuDesktopState=state;
    })
  }

  updateSubmenu(menuItemData:any) {
    let role= menuItemData.getAttribute("value")
        let positionX= window.scrollX + menuItemData.getBoundingClientRect().left

        if(role==='artistas') this._womenList= this.womenService.womenArray['artistas'];
        if(role==='arquitectas') this._womenList= this.womenService.womenArray['arquitectas'];
        if(role==='disenadoras') this._womenList= this.womenService.womenArray['disenadoras'];
        if(role==='escritoras') this._womenList= this.womenService.womenArray['escritoras'];
        if(role==='fotografas') this._womenList= this.womenService.womenArray['fotografas'];
        if(role==='maestras') this._womenList= this.womenService.womenArray['maestras'];

        this.changeSubmenuPosition(positionX)
        this._womenList.length>12 ? this._overflowSubmenuMax=true : this._overflowSubmenuMax=false;
  }

  changeSubmenuPosition(pos:any):void {
    this.renderer.setStyle(this.womenList.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.womenList.nativeElement, 'left', `${pos }px`);

  }

}
