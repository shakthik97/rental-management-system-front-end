import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-save-customer',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './save-customer.component.html',
  styleUrl: './save-customer.component.css'
})
export class SaveCustomerComponent {

  public customerObj = {
    name : "",
    city: "",
    contact: ""
  }
  constructor(private http: HttpClient){}

  saveCustomer(){
    this.http.post("http://localhost:8080/customer/add", this.customerObj).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
