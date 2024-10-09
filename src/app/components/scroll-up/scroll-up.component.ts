import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.scss',
})
export class ScrollUpComponent implements OnInit {
  active = false;
  scrollToTop(): void {
    return document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
}
