import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        minWidth: '40px',
      })),
      state('open', style({
        minWidth: '145px',
        opacity: '1',
      })),
      transition('closed <=> open', animate('0.6s ease-in-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit{
  menu: Boolean = true;
  closing = true;
  close = 200;
  faRocket = faRocket;
  faCompass = faCompass;
  faBookmark = faBookmark;

  constructor() {}

  ngOnInit(): void {
    
  }

  sideMenu() {
    if (this.closing) {
      this.close = 0;
      setTimeout(() => {
        this.menu = false;
        this.closing = false;
      }, 100);
    } else {
      this.close = 200;
      setTimeout(() => {
        this.menu = true;
        this.closing = true;
      }, 450);
    }

  }
}
