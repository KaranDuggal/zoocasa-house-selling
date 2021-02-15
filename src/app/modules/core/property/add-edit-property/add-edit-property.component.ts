import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormControl, FormGroup, FormGroupName, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-add-edit-property',
  templateUrl: './add-edit-property.component.html',
  styleUrls: ['./add-edit-property.component.css']
})
export class AddEditPropertyComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }
  ngOnInit(): void {
    const arrData = new FormArray([
      new FormControl(this.propertyForm),
      new FormControl(this.discription),
      new FormControl(this.property_details),
      new FormControl(this.room_layout),
      new FormControl(this.utilities)
    ])
  }
  
  

  propertyForm = new FormGroup({
    property_name: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    price: new FormControl(null, { validators: [Validators.required] }),
    contrary: new FormControl(null, { validators: [Validators.required] }),
    state: new FormControl(null, { validators: [Validators.required] }),
    city: new FormControl(null, { validators: [Validators.required] }),
    house_number: new FormControl(null, { validators: [Validators.required] }),
  })
  discription = new FormGroup({
    discription: new FormControl(null, { validators: [Validators.required, Validators.email] }),
  })
  property_details = new FormGroup({
    key: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    value: new FormControl(null, { validators: [Validators.required, Validators.email] }),
  })
  room_layout = new FormGroup({
    key: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    floor: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    width: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    height: new FormControl(null, { validators: [Validators.required, Validators.email] }),
  })
  utilities = new FormGroup({
    key: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    value: new FormControl(null, { validators: [Validators.required, Validators.email] }),
  })

  propertydata(){
    console.log('this.loginForm.value')
  }

  

}
