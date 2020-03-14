import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';
import { Seller } from '../../seller';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

 

  username:string='';
  password:string='';
  company:string='';
  brief:string='';
  gst:number;
  address:string='';
  email:string='';
  website:string='';
  contact:number;
  sellers:any;

  constructor(protected emartService:EmartService,protected router:Router) { }

  ngOnInit(): void {
  }


  addSeller(){
    
    let seller:Seller = {
      id:0,
      username:this.username,
      password:this.password,
      company:this.company,
      brief:this.brief,
      gst:this.gst,
      address:this.address,
      email:this.email,
      website:this.website,
      contact:this.contact
      
                        
    };
    
    this.emartService.addSeller(seller).subscribe(
      (response: any)=>{
      }
    );
      this.router.navigate(['/']);
}
}
