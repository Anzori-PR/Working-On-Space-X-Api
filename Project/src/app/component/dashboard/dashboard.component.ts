import { Component, OnInit } from '@angular/core';
import { rocket_launches } from 'src/app/rocket_launches.interface';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  Data: rocket_launches[] = [];

  constructor(private service : FetchDataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe( (data) => {
      this.Data = data;
      console.log(this.Data)
    })
  }


}
