import { Component, OnInit } from '@angular/core';
import {ClickImgService} from '../services/click-img.service';

@Component({
  selector: 'app-beauty-health',
  templateUrl: './beauty-health.component.html',
  styleUrls: ['./beauty-health.component.css']
})
export class BeautyHealthComponent implements OnInit {

  constructor(private clickImgService :ClickImgService) { }
  public newSource1 ="../../assets/img/beauty/1.jpg";
  public newSource2 ="../../assets/img/beauty/2.jpg";
  public newSource3 ="../../assets/img/beauty/3.jpg";
  public newSource4 ="../../assets/img/beauty/4.jpg";
  public newSource5 ="../../assets/img/beauty/5.jpg";
  public newSource6 ="../../assets/img/beauty/6.jpg";
  public newSource7 ="../../assets/img/beauty/7.jpg";
  public newSource8 ="../../assets/img/beauty/8.jpg";
  public newSource9 ="../../assets/img/beauty/9.jpg";
  image1;
  onClick1(src){
   this.image1 = this.clickImgService.clickImg(src);
    console.log(this.image1);
  }
 
  ngOnInit() {
  }

}
