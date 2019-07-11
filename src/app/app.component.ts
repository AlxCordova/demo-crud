import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { BusinessService } from '../app/business.service';

import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrud';
  version; //nuevo
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private bs: BusinessService){
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  //nuevo
  ngOnInit() {
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart){
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd){
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
