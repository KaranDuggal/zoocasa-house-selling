import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {
  constructor(
    private apiService: ApiService,
  ) { }

  propertyArr = []

  ngOnInit(): void {
  }
  getdata(){
    
  }

}
