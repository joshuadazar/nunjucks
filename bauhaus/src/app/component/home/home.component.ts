import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("splash") splash!: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.splash.nativeElement, 'display', 'none');
  }
}
