import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  customOptions = {
    // loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: true
  }

  slidesStore = [
    {
      id: "1",
      alt: "Sweet Image",
      title: "Sweet Image 1",
      src: "assets/images/shopping.png"
      // src: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: "2",
      alt: "Sweet Image 2",
      title: "Sweet Image 2",
      src: "assets/images/shopping.png"
    },
    {
      id: "3",
      alt: "Sweet Image 3",
      title: "Sweet Image 3",
      src: "assets/images/shopping.png"
    },
  ]

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar-form') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-white');
    } else {
      element.classList.remove('bg-white');
    }
  }
}
