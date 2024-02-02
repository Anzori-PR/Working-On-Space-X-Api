import { Component, OnInit } from '@angular/core';
import { rocket_launches } from 'src/app/rocket_launches.interface';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
export class DashboardComponent implements OnInit{
  Data: rocket_launches[] = [];
  Search: Array<any> = [];
  menu: Boolean = true;
  closing = true;
  close = 200;
  faRocket = faRocket;
  faCompass = faCompass;
  faBookmark = faBookmark;
  faSearch = faSearch;
  searchForm!: FormGroup;

  constructor(private service : FetchDataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.Data = data;
    });
  
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
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
      }, 350);
    }

  }

  search() {
    const searchTerm = this.searchForm.value.search.toLowerCase();

    if (searchTerm === '') {
      this.service.getData().subscribe((data) => {
        this.Data = data;
      });
    } else {
      this.Data = this.Data.filter((item) =>
        item.mission_name.toLowerCase().includes(searchTerm)
      );
    }
  }
  

}
