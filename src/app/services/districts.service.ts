import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor() { }

  getDistricts(state: any) {

    let optionsList: any = [];
    let list: any = [];

    {
      var TamilNadu = ["Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kancheepuram", "Kanniyakumari", "Karur", "Madurai", "Nagapattinam",
        "Namakkal", "Nilgiris", "Perambalur", "Pudukottai", "Ramanathapuram", "Salem", "Sivagangai", "Thanjavur", "Theni", "Thiruvallur", "Tiruvannamalai", "Thiruvarur",
        "Thoothukudi", "Tiruchirappalli", "Thirunelveli", "Vellore", "Viluppuram", "Virudhunagar", "Ariyalur", "Krishnagiri", "Tiruppur", "Chengalpattu", "Kallakurichi",
        "Ranipet", "Tenkasi", "Tirupathur", "Mayiladuthurai"];
      var Puducherry = ["Puducherry"];
    }//District list
    switch (state) {
      case "TamilNadu":
        list = TamilNadu;
        break;
      case "Puducherry":
        list = Puducherry;
        break;
      default:
        list;
        break;
    }

    optionsList.push({ "value": '', 'name': 'Select District' })
    for (var i = 0; i < list.length; i++) {
      optionsList.push({ 'value': i, 'name': list[i] })
    }
    console.log("🚀 ~ DistrictsService ~ getDistricts ~ optionsList:", list)
    return optionsList;
  }
}
