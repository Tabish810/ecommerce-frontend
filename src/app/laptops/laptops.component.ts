import { Component, OnInit } from '@angular/core';
import {ClickImgService} from '../services/click-img.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private clickImgService : ClickImgService) { }
  public newSource1 ="../../assets/img/laptop_imgs/1.jpg";
  public newSource2 ="../../assets/img/laptop_imgs/2.jpg";
  public newSource3 ="../../assets/img/laptop_imgs/3.jpg";
  public newSource4 ="../../assets/img/laptop_imgs/4.jpg";
  public newSource5 ="../../assets/img/laptop_imgs/5.png";
  public newSource6 ="../../assets/img/laptop_imgs/6.jpg";
  public newSource7 ="../../assets/img/laptop_imgs/7.jpg";
  public newSource8 ="../../assets/img/laptop_imgs/8.jpg";
  public newSource9 ="../../assets/img/laptop_imgs/9.png";
  image1;
  onClick1(src){
   this.image1 = this.clickImgService.clickImg(src);
    console.log(this.image1);
  }
  ngOnInit() {
  }

}
