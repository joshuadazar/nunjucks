import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import { DOMStateService } from 'src/app/services/domstate.service';
import {WomenArrayService} from '../../services/women-array.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //DOM elements

  @ViewChild("menuDesktop") menuDesktop!: ElementRef;
  @ViewChild("menuMobileContainer") menuMobileContainer!: ElementRef;
  @ViewChild("womenList") womenList!: ElementRef;
  @ViewChild("menuMobileRoles") menuMobileRoles!: ElementRef;

  //Expressions
  _showMobileStatus: boolean = false;
  mobileMenuState: boolean = false;
  _hideSubmenu:boolean = false;

  _showMenuMobileContainer: boolean = false; //container
  _showMenuMobileRoles: boolean = false; //menu content
  // domService

  constructor(
    private renderer: Renderer2,
    private womenService: WomenArrayService,
    private domService: DOMStateService
    ) { }

  ngOnInit(): void {
    this.watchMenuMobileContainer();
    this.watchMenuMobileRoles();

  }
// services watcher

  watchMenuMobileContainer() { //menu container
    this.domService.watchMenuMobileContainerSubject().subscribe(state=> {
      console.log(state, 'servicio container');
      this._showMenuMobileContainer=state;
    })
  }

  watchMenuMobileRoles() { // menu roles
    this.domService.watchMenuMobileRolesSubject().subscribe(state => {
      this._showMenuMobileRoles=state;
      console.log('roles servicio', state, "local:", this._showMenuMobileRoles);
    })
  }

  onMenuDesktopOver(e:any):void {
    this.mobileMenuState=false;
    if(e.target.nodeName=="LI") {
      this.womenService.setWomenList(e.target)
    }
  }

  changeSubmenuPosition(pos:any):void {
    this.renderer.setStyle(this.womenList.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.womenList.nativeElement, 'left', `${pos }px`);
  }

  //Menu Mobile

  //icon muenu show hide menu

  toggleMenuMobile():void {
    this.domService.setMenuMobileContainer(!this._showMenuMobileContainer);
    this.domService.setMenuMobileRoles(true);
    this.domService.setMenuMobileNames(false);
  }

  resizeWindow() {
    this._showMenuMobileContainer=false;
    this.domService.setSubmenuDesktop(false);
  }

  loadMenuMobileRoles(e:any) {
    if(e.target.nodeName==="LI") {
      this.domService.setMenuMobileRoles(false);
      this.womenService.setWomenDataMobile(e.target);
    }
  }

}
