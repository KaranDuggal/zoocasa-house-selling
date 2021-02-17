import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-get-property',
  templateUrl: './get-property.component.html',
  styleUrls: ['./get-property.component.css']
})
export class GetPropertyComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  propertyArr:any
  ViewCheckup:any
  ngOnInit(): void {
    
    
    this.getdata()
  }
  getdata(){
    const id = this.activatedRoute.snapshot.params['id']
    this.apiService.callAPI("get","", "api/property/getproperty/"+id).subscribe((data:any) => {
      this.propertyArr = data
      console.log('this.propertyArr', this.propertyArr)
    })
  }
}
