import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular 13 MFE';
  public ngVersion = '';

  public constructor() {
    import('@angular/core').then((ng): void => {
      this.ngVersion = ng.VERSION.full;
    });
  }
}
