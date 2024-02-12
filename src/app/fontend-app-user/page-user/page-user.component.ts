import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/data.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
})
export class PageUserComponent implements OnInit {

  orders: any[] = [];
  searchText: any;

//ส่วนที่เอาไว้Getออเดอร์มา
  constructor(
  private orderService: OrderService,
  private router: Router) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

  navigateToOrderDetails(name: string, price: number) {
    this.router.navigate(['/order-details'], { queryParams: { name, price } });
}

 }
