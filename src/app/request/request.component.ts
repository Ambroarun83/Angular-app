import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { CommonModule } from '@angular/common';
import { DistrictsService } from '../services/districts.service';
import { TaluksService } from '../services/taluks.service';


@Component({
  selector: 'app-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './request.component.css',
  templateUrl: './request.component.html',
})
export class RequestComponent {

  districts: any[] = [{ 'value': '', 'name': 'Select District' }];
  taluks: any[] = [{ 'value': '', 'name': 'Select Taluk' }];

  request_creationForm = new FormGroup({
    cus_id: new FormControl(''),
    cus_name: new FormControl(''),
    cus_data: new FormControl(''),
    cus_status: new FormControl(''),
    dob: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    state: new FormControl(''),
    district: new FormControl(''),
    taluk: new FormControl(''),
    area: new FormControl(''),
    sub_area: new FormControl(''),
    address: new FormControl(''),
    mobile1: new FormControl(''),
    mobile2: new FormControl(''),
    father_name: new FormControl(''),
    mother_name: new FormControl(''),
    marital: new FormControl(''),
    spouse_name: new FormControl(''),
    occ_type: new FormControl(''),
    occupation: new FormControl(''),
    cus_pic: new FormControl(''),
  })

  requestservice = inject(RequestService);
  districtservice = inject(DistrictsService);
  talukservice = inject(TaluksService);

  calculateAge() {
    const dob = this.request_creationForm.value.dob;
    const ageValue = dob ? this.requestservice.calculateAge(dob).toString() : '';
    // this.request_creationForm.get('age')?.setValue(ageValue);
    this.setValue(this.request_creationForm,'age',ageValue);
  }
  getDistricts() {
    const state = this.request_creationForm.value.state;
    this.districts = state ? this.districtservice.getDistricts(state) : '';
  }
  getTaluks() {
    const state = this.request_creationForm.value.state;
    const district = this.request_creationForm.value.district;
    this.taluks = state && district ? this.talukservice.getTaluks(state, district) : '';
  }

  //this function is to set values to the DOM input fields using angular
  setValue(form:any, controlName:string, value:any) {
    form.get(controlName)?.setValue(value);
  }
}
