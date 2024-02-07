import { Component, HostListener, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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
  close = window.innerWidth >= 800 ? 200 : 0;
  faRocket = faRocket;
  faHouse = faHouse;
  faBookmark = faBookmark;

  constructor() { }

  ngOnInit(): void {
    
  }

  sideMenu() {
    if (this.closing) {
      this.close = 0;
      setTimeout(() => {
        this.menu = false;
        this.closing = window.innerWidth <= 800 ? true : false;
      }, 100);
    } else {
      this.close = 200;
      setTimeout(() => {
        this.menu = true;
        this.closing = true;
      }, 450);
    }
    
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.close = window.innerWidth <= 800 ? 0 : 200;
  }

}
