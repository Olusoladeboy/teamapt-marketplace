import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teamapt-marketplace';
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    const userAgent = navigator.userAgent;
    if (/Mobi/.test(userAgent)) {
      // Mobile device
      this.titleService.setTitle('Mobile App');
    } else {
      // Desktop device
      this.titleService.setTitle('Error - Mobile App Only');
      alert('This app is only available on mobile devices.');
    }
  }
}
