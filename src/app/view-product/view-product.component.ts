import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  product: any;
  constructor(
    private location: Location
  ) {
  }
  ngOnInit(): void {
    this.product = this.location.getState();
  }
}
