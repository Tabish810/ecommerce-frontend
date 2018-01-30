import { Injectable } from '@angular/core';

@Injectable()
export class ClickImgService {

  constructor() { }
public newSrc;
  clickImg(src){
    this.newSrc = src;
    return this.newSrc;
  }

}
