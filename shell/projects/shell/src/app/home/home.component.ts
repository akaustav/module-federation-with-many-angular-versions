import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public title = 'shell';
  public ngVersion = '';

  public constructor() {
    import('@angular/core').then((ng): void => {
      this.ngVersion = ng.VERSION.full;
    });
  }
}
