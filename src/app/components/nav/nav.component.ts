import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  activeMobileNav: boolean = false;
  slide = {};
  slideNav() {}
  hideNavBrand() {
    this.activeMobileNav = false;
    this.slide = {
      slide: false,
    };
  }
  hideNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: false,
    };
  }
  activeNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: true,
    };
  }
}
