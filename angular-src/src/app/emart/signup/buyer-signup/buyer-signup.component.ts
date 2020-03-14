import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {
  username:string='';
  password:string='';
  email:string='';
  mobile:number;
  date:Date;
  buyers: any;


  constructor(protected emartService: EmartService,protected  router:Router) { }

  ngOnInit(): void {
  }  
  addBuyer(){
    
    let buyer:any = {
      id:0,
      username:this.username,
      password:this.password,
      email:this.email,
      mobile:this.mobile,
      date:this.date
                        
    };
    
    this.emartService.addBuyer(buyer).subscribe(
      (response: any)=>{
        //this.buyers.push(response);
      }
    );
    /*this.username = '';
    this.password = '';
    this.email='';
    this.mobile=null,
    this.date=null*/
    

    this.router.navigate(['/']);
  

}
}
