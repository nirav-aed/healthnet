import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-left-menu',
  templateUrl: './user-left-menu.component.html',
  styleUrls: ['./user-left-menu.component.css']
})
export class UserLeftMenuComponent implements OnInit {
  @ViewChild('navWrapper') public navWrapper: ElementRef;
  @ViewChild('innerNav') public innerNav: ElementRef;
  last_known_scroll_position = 0;
  ticking = false;
  data_overflow;

  constructor() { }

  ngOnInit() {
    this.data_overflow = this.determineOverflow(this.innerNav.nativeElement, this.navWrapper.nativeElement);
    console.log('data_overflow: ' + this.data_overflow);
    this.navWrapper.nativeElement.setAttribute("data-overflowing", this.data_overflow);
  }

  determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsRight = Math.floor(containerMetrics.right);
    var containerMetricsLeft = Math.floor(containerMetrics.left);
    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsRight = Math.floor(contentMetrics.right);
    var contentMetricsLeft = Math.floor(contentMetrics.left);
    if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
      return "both";
    } else if (contentMetricsLeft < containerMetricsLeft) {
      return "left";
    } else if (contentMetricsRight > containerMetricsRight) {
      return "right";
    } else {
      return "none";
    }
  }

  /* doSomething(scroll_pos) {
    this.navWrapper.nativeElement.setAttribute("data-overflowing", this.determineOverflow(this.innerNav.nativeElement, this.navWrapper.nativeElement));
  } */

  /* requestAnimationFrameCallback(): any {
    this.doSomething(this.last_known_scroll_position);
    this.ticking = false;
  } */

  scrollListener() {
    this.navWrapper.nativeElement.setAttribute("data-overflowing", this.determineOverflow(this.innerNav.nativeElement, this.navWrapper.nativeElement));
    /* this.last_known_scroll_position = window.scrollY;
    if (!this.ticking) {
        window.requestAnimationFrame(this.requestAnimationFrameCallback());
    }
    this.ticking = true; */
  }


}
