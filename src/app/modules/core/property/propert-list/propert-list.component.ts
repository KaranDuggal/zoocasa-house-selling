import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import {Route} from '@angular/router'
@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {
  constructor(
    private apiService: ApiService,
  ) { }

  propertyArr:any

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.apiService.callAPI("get","", "api/property/getproperty").subscribe((data:any) => {
      this.propertyArr = data.property
      console.log('this.propertyArr', this.propertyArr[0])
    })
  }
  delete(id:any){
    this.apiService.callAPI("delete","", `api/property/getproperty/${id}/delete`).subscribe((data:any) => {
      console.log(data);
    })
    // router.navigate(['/role']);
  }

}
