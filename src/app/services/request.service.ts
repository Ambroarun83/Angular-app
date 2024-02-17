import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() {

  }

  calculateAge(date: string) {
    console.log(date)
    var myDate = new Date(date),
      milli = myDate.getTime(),
      newDate = new Date(),
      newMilli = newDate.getTime();

    return (Math.floor((newMilli - milli) / 1000 / 60 / 60 / 24 / 30 / 12));
  }
}
