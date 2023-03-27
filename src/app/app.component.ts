import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'teamapt-marketplace';
  constructor(private titleService: Title,
    private contexts: ChildrenOutletContexts) { }

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

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
