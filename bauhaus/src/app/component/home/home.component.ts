import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DOMStateService } from 'src/app/services/domstate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("splash") splash!: ElementRef;
  constructor(
    private renderer: Renderer2,
    private domService: DOMStateService,
    ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.splash.nativeElement, 'display', 'none');
  }

  hideMenuDesktop() {
    this.domService.setMenuDesktopState(false);
  }
}
