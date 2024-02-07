import { Component, OnInit } from '@angular/core';
import { rocket_launches } from 'src/app/rocket_launches.interface';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  Data: rocket_launches[] = [];
  defaultImage: string = '../../../assets/default.jpg';
  Search: Array<any> = [];

  details: rocket_launches | undefined;
  popUp: boolean = false;
  
  searchForm!: FormGroup;
  
  faSearch = faSearch;
  faXmark = faXmark;

  page: number = 1;
  pageNumbers: number = 25;
  totalItems: any;

  constructor(private service : FetchDataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.Data = data;
      this.totalItems = data.length;
    });
  
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
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

  handleImageError(event: any) {
    event.target.src = this.defaultImage;
  }

  openPopUp(id: string) {
    this.details = this.Data.find(e => e.flight_number === id);
    this.popUp = true;
  }

  closePopUp() {
    this.popUp = false;
  }
  

  onPageChange(pageNumber: number): void {
    this.page = pageNumber;
    // Add Time out bc sometimes scroll to top isnot working, now it's fixed;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

}
