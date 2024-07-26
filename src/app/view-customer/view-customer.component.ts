import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {
 public customerId:any;



 searchCustomer(){
  console.log(this.customerId);
 }
}
