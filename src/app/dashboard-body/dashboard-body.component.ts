import { Component, OnInit } from '@angular/core';
import {ClickImgService} from '../services/click-img.service';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {

  constructor(private clickImgService : ClickImgService) { }
  public newSource1 ="../../assets/img/12.jpg";
  public newSource2 ="../../assets/img/2.jpg";
  public newSource3 ="../../assets/img/11.png";
  public newSource4 ="../../assets/img/10.jpg";
  public newSource5 ="../../assets/img/5.jpg";
  public newSource6 ="../../assets/img/6.jpg";
  public newSource7 ="../../assets/img/7.jpg";
  public newSource8 ="../../assets/img/8.jpg";
  public newSource9 ="../../assets/img/9.jpg";
  image1;
  onClick1(src){
   this.image1 = this.clickImgService.clickImg(src);
    console.log(this.image1);
  }
  ngOnInit() {
  }

}
