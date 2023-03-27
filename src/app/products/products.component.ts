import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: {
    [key: string]: any,
  }[] = [
      {
        id: '1',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-2.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '1',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      }, {
        id: '1',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-2.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
      {
        id: '2',
        title: 'Essential Men’s Short-Sleeve Crewneck T-Shirt',
        category: 'Shirt',
        rating: '4.9',
        salesCount: '2356',
        price: '12.00',
        imageUrl: 'assets/images/clothing-1.png',
        images: [
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
          'assets/images/clothing-1.png',
        ]
      },
    ]

  constructor(private router: Router) {

  }

  navigateToProduct(item: any) {
    this.router.navigate(['/product'], { state: item });
  }
}
