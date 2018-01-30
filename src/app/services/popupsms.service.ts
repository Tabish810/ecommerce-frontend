import { Injectable } from '@angular/core';

@Injectable()
export class PopupsmsService {

  constructor() { }

  validateForm(input){
    if(input.phone_no == undefined  || input.email=="" || input.quantity==undefined){
      return false;
    }
    else{
      return true;
    }
  }
}
