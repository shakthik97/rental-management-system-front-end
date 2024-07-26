import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {

  public updatedCstomer = {
    id: undefined,
    name : undefined,
    city: undefined,
    contact:undefined
  }

  public customerList: any;

    constructor(public http:HttpClient){
      this.loadAllCustomersToTheList();
    }

    loadAllCustomersToTheList(){
      this.http.get("http://localhost:8080/customer/get-all").subscribe(response =>{
       this.customerList = response;  
       console.log(response);
      })
     }
  
    
}


