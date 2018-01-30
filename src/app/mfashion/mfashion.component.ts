import { Component, OnInit } from '@angular/core';
import {ClickImgService} from '../services/click-img.service';

@Component({
  selector: 'app-mfashion',
  templateUrl: './mfashion.component.html',
  styleUrls: ['./mfashion.component.css']
})
export class MfashionComponent implements OnInit {

  constructor(private clickImgService :ClickImgService) { }
  public newSource1 ="../../assets/img/mfashion/1.jpg";
  public newSource2 ="../../assets/img/mfashion/2.jpg";
  public newSource3 ="../../assets/img/mfashion/3.jpg";
  public newSource4 ="../../assets/img/mfashion/4.jpg";
  public newSource5 ="../../assets/img/mfashion/5.jpg";
  public newSource6 ="../../assets/img/mfashion/6.jpg";
  public newSource7 ="../../assets/img/mfashion/7.jpg";
  public newSource8 ="../../assets/img/mfashion/8.jpg";
  public newSource9 ="../../assets/img/mfashion/9.jpg";
  image1;
  onClick1(src){
   this.image1 = this.clickImgService.clickImg(src);
    console.log(this.image1);
  }
  ngOnInit() {
  }

}
