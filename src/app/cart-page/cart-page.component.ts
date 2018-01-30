import { Component, OnInit } from '@angular/core';
import {PopupsmsService} from '../services/popupsms.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {HttpService} from '../services/http.service';
import {ClickImgService} from '../services/click-img.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public input : any;
  public t_qty : any;
   constructor(private  popUpService : PopupsmsService,
  private service:HttpService, private flashMessage : FlashMessagesService,
  private imgService : ClickImgService) {
     this.input={
       "phone_no":"",
       "email":"",
       "quantity":"",
       "total" :""
     }
   }
  validateForm(){
   if(!this.popUpService.validateForm(this.input)){
   // this.flashMessage.show("Error",{cssClass:'alert-danger',timeout:3000 });
     return false;
   }
}
onClick(a){
     console.log(a)
     this.t_qty = a*450;
     this.input.total = this.t_qty;
     console.log(this.input);
     this.insertItems();
}
 
  newdata;
   insertItems(){
       var url = 'AllRecords';
       //var dataPost;
       this.service.addData(url,this.input).subscribe(data1 => {
         if(data1.statusCode !== 505 && data1.statusCode ===200){
         this.flashMessage.show("We will shortly contact you, Thanks!",{cssClass:'alert-success',timeout:5000 });
          console.log("success"); 
        }
         else{
           console.log("wrong data entered")
         this.flashMessage.show("Error!! wrong data entered",{cssClass:'alert-danger',timeout:3000 });
         }
       },
         err => {
           console.log(err, "error")
         }
       )
     }

// random;
//   RandomNumber(){
//    this.ran= Math.floor((Math.random()*10000000+1));
//    this.random = this.ran;
    
//   }
public displayImg;
getImage(){
  return this.displayImg = this.imgService.newSrc;
}
  ngOnInit() {
  this.getImage();
  }
}
