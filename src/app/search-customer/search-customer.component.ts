import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css'
})
export class SearchCustomerComponent {
  customerId:any;
  


  searchCustomerById(){
    console.log(this.customerId);
  }
}
