import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaveCustomerComponent } from "./save-customer/save-customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaveCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-app';
}
