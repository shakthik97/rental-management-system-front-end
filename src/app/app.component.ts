import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaveCustomerComponent } from "./save-customer/save-customer.component";
import { ViewCustomerComponent } from "./view-customer/view-customer.component";
import { SearchCustomerComponent } from "./search-customer/search-customer.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaveCustomerComponent, ViewCustomerComponent, SearchCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-app';
}
