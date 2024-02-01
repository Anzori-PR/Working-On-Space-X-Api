import { Component, OnInit } from '@angular/core';
import { rocket_launches } from 'src/app/rocket_launches.interface';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  Data: rocket_launches[] = [];
  menu: boolean = true;
  close = 200;
  faRocket = faRocket;
  faCompass = faCompass;
  faBookmark = faBookmark;
  faSearch = faSearch;

  constructor(private service : FetchDataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe( (data) => {
      this.Data = data;
    })
  }

  sideMenu() {
    this.close = this.close === 200 ? 40 : 200;
    this.menu = !this.menu;
  }


}
