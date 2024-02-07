import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/data.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  orders: any[] = [];
//ส่วนที่เอาไว้Getออเดอร์มา
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

 }
