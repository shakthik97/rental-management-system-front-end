import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerComponent } from './view-customer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import axios from 'axios';

describe('ViewCustomerComponent', () => {
  let component: ViewCustomerComponent;
  let fixture: ComponentFixture<ViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerComponent,FormsModule, HttpClientModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
