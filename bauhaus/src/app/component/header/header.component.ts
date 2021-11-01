import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import {WomenArrayService} from '../../services/women-array.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //DOM elements

  @ViewChild("menuDesktop") menuDesktop!: ElementRef;
  @ViewChild("submenuDesktop") submenuDesktop!: ElementRef;
  @ViewChild("womenList") womenList!: ElementRef;

  //Expressions

  mobileMenuState: boolean = false;
  // domService

  constructor(
    private renderer: Renderer2,
    private womenService: WomenArrayService
    ) { }

  // const header= document.getElementById("header");
  ngOnInit(): void {
  }
   //dom service



    // Sub menu search engine

    loadWomenList(roleArr:any, roleName=null) {
      let arrSize=roleArr.length
      if(arrSize>12 && !this.mobileMenuState){
        let result = roleArr.reduce((roleArr:any, item:any, index:any) => {
          const chunkIndex = Math.floor(index/(arrSize/2))
          if(!roleArr[chunkIndex]) roleArr[chunkIndex] = []
          roleArr[chunkIndex].push(item)
          return roleArr
        }, [])

        this.renderer.setProperty(this.womenList.nativeElement,'innerHTML',"")
        this.listItemFactory(result[0])
        this.listItemFactory(result[1])

      }
      else{
        this.renderer.setProperty(this.womenList.nativeElement,'innerHTML',"")
        this.listItemFactory(roleArr, roleName)
      }

    }

    listItemFactory(nameArr:any,roleName=null) {
      if(this.mobileMenuState===false) {
        this.renderer.setProperty(this.womenList.nativeElement,'innerHTML',`<ul class="ul">${nameArr.map((name:any) => `<li>${name}</li>`).join('')}</ul>`)
      }
      else {
        // mobileWomenList.innerHTML= `
        // <li value="closeMenu" class="role-title">${roleName} <div value="closeMenu"> X </div></li>
        // ${nameArr.map(name => `<li>${name}</li>`).join('')}`;
      }
    }

    //Menu Desktop

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

}
