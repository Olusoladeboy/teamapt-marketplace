import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: { [key: string]: string }[] = [
    {
      icon: 'assets/images/category.svg',
      title: 'Category'
    },
    {
      icon: 'assets/images/flight.svg',
      title: 'Flight'
    },
    {
      icon: 'assets/images/bill.svg',
      title: 'Bill'
    },
    {
      icon: 'assets/images/data-plan.svg',
      title: 'Data Plan'
    },
    {
      icon: 'assets/images/topup.svg',
      title: 'Top Up'
    }
  ]
  ngOnInit(): void {
    console.log('Component Initialized')
  }
}
